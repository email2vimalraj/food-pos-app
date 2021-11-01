import type { NextApiRequest, NextApiResponse } from 'next';

import type { ProductCategory } from '.prisma/client';
import { prisma } from '@lib/prisma';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse<ProductCategory[] | ProductCategory>
) {
  if (req.method === 'GET') {
    const productCategories = await prisma.productCategory.findMany({});
    return res.status(200).json(productCategories);
  }

  if (req.method === 'POST') {
    const { name } = JSON.parse(req.body);
    const productCategory = await prisma.productCategory.create({
      data: {
        name
      }
    });
    return res.status(200).json(productCategory);
  }
}
