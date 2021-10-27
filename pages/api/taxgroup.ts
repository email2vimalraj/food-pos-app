import type { NextApiRequest, NextApiResponse } from "next";

import type { TaxGroup } from ".prisma/client";
import { prisma } from "../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<TaxGroup[] | TaxGroup>
) {
  if (req.method === "GET") {
    const taxGroups = await prisma.taxGroup.findMany({});
    return res.status(200).json(taxGroups);
  }

  if (req.method === "POST") {
    const { name } = JSON.parse(req.body);
    const taxGroup = await prisma.taxGroup.create({
      data: {
        name,
      },
    });
    return res.status(200).json(taxGroup);
  }
}
