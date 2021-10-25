import type { NextPage } from "next";
import React from "react";
import useSWR from "swr";

import fetcher from "../lib/fetcher";
import type { ProductVariantGroup } from ".prisma/client";

const VariantGroups: NextPage = () => {
  const { data, error } = useSWR<any>('/api/variantgroup', fetcher)
  const [variantGroup, setVariantGroup] = React.useState<string>("");

  const handleAddVariantGroup = async () => {
    await fetch('/api/variantgroup', {
      method: 'POST',
      body: JSON.stringify({ name: variantGroup })
    })
  }

  if (error) return <div>An error occured.</div>
  if (!data) return <div>Loading ...</div>

  return (
    <>
      <div>
        <input type="text" name="name" id="name" value={variantGroup} onChange={e => setVariantGroup(e.target.value)} />
        <button onClick={() => handleAddVariantGroup()}>Add Variant Group</button>
      </div>
      <ul>
        {data.map((variantgroup: ProductVariantGroup) => (
          <li key={variantgroup.id}>{variantgroup.name}</li>
        ))}
      </ul>
    </>
  );
};

export default VariantGroups;