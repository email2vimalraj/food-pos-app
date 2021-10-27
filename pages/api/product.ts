import type { NextApiRequest, NextApiResponse } from "next";

import type { Product } from ".prisma/client";
import { prisma } from "../../lib/prisma";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<Product[] | Product>
) {
  if (req.method === "GET") {
    const products = await prisma.product.findMany({
      include: {
        category: true,
        variantGroup: true,
      },
    });
    return res.status(200).json(products);
  }

  if (req.method === "POST") {
    const { name, price, categoryId, productVariantGroupId, taxGroupId } =
      JSON.parse(req.body);
    const product = await prisma.product.create({
      data: {
        name,
        price,
        categoryId,
        productVariantGroupId,
        taxGroupId,
      },
    });
    return res.status(200).json(product);
  }
}
