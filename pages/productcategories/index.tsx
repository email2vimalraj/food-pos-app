import type { NextPage } from "next";
import React from "react";
import useSWR from "swr";
import type { ProductCategory } from ".prisma/client";

import fetcher from "@lib/fetcher";

const ProductCategories: NextPage = () => {
  const { data, error } = useSWR<any>('/api/productcategory', fetcher)

  if (error) return <div>An error occured.</div>
  if (!data) return <div>Loading ...</div>

  return (
    <>
      <ul>
        {data.map((productCategory: ProductCategory) => (
          <li key={productCategory.id}>{productCategory.name}</li>
        ))}
      </ul>
    </>
  );
};

export default ProductCategories;