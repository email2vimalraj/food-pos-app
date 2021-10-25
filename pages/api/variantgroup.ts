import type { NextApiRequest, NextApiResponse } from "next";

import type { ProductVariantGroup } from ".prisma/client";
import { prisma } from "../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<ProductVariantGroup[] | ProductVariantGroup>
) {
  if (req.method === "GET") {
    const productVariants = await prisma.productVariantGroup.findMany({});
    return res.status(200).json(productVariants);
  }

  if (req.method === "POST") {
    const { name } = JSON.parse(req.body);
    const productVariant = await prisma.productVariantGroup.create({
      data: {
        name,
      },
    });
    return res.status(200).json(productVariant);
  }
}
