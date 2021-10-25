import type { NextPage } from "next";
import React from "react";
import useSWR from "swr";

import fetcher from "../../lib/fetcher";
import type { ProductVariantGroup } from ".prisma/client";

const VariantGroups: NextPage = () => {
  const { data, error } = useSWR<any>('/api/variantgroup', fetcher)

  if (error) return <div>An error occured.</div>
  if (!data) return <div>Loading ...</div>

  return (
    <>
      <ul>
        {data.map((variantgroup: ProductVariantGroup) => (
          <li key={variantgroup.id}>{variantgroup.name}</li>
        ))}
      </ul>
    </>
  );
};

export default VariantGroups;