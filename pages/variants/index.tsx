import type { NextPage } from "next";
import React from "react";
import useSWR from "swr";

import fetcher from "../../lib/fetcher";

const Variants: NextPage = () => {
  const { data: variants, error: variantError } = useSWR<any>('/api/variant', fetcher)

  if (variantError) return <div>An error occured.</div>
  if (!variants) return <div>Loading ...</div>

  return (
    <>
      <ul>
        {variants.map((variant: any) => {
          return <li key={variant.id}>{variant.name} - {variant.price} - {variant.variantGroup.name}</li>
        })}
      </ul>
    </>
  )
}

export default Variants;