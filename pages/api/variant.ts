import type { NextApiRequest, NextApiResponse } from "next";

import type { ProductVariant } from ".prisma/client";
import { prisma } from "@lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<ProductVariant[] | ProductVariant>
) {
  if (req.method === "GET") {
    const productVariants = await prisma.productVariant.findMany({
      include: {
        variantGroup: true,
      },
    });
    return res.status(200).json(productVariants);
  }

  if (req.method === "POST") {
    const { name, price, variantGroupId } = JSON.parse(req.body);
    const productVariant = await prisma.productVariant.create({
      data: {
        name,
        price,
        variantGroupId,
      },
    });
    return res.status(200).json(productVariant);
  }
}
