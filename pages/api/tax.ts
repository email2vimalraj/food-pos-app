import type { NextApiRequest, NextApiResponse } from "next";

import type { Tax } from ".prisma/client";
import { prisma } from "@lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<Tax[] | Tax>
) {
  if (req.method === "GET") {
    const taxes = await prisma.tax.findMany({
      include: {
        taxGroup: true,
      },
    });
    return res.status(200).json(taxes);
  }

  if (req.method === "POST") {
    const { name, taxPercent, taxGroupId } = JSON.parse(req.body);
    const tax = await prisma.tax.create({
      data: {
        name,
        taxPercent,
        taxGroupId,
      },
    });
    return res.status(200).json(tax);
  }
}
