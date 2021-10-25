import type { NextPage } from "next";
import React from "react";
import useSWR from "swr";

import fetcher from "../lib/fetcher";
import type { ProductVariantGroup } from ".prisma/client";

const Variant: NextPage = () => {
  const { data: variants, error: variantError } = useSWR<any>('/api/variant', fetcher)
  const { data: variantgroups, error: variantGroupError } = useSWR<any>('/api/variantgroup', fetcher)
  const [variant, setVariant] = React.useState<string>("")
  const [variantPrice, setVariantPrice] = React.useState<number>(0.00)
  const [variantGroup, setVariantGroup] = React.useState<number | null>(null)
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null)

  const handleAddVariant = async () => {
    if (!variantGroup) {
      setErrorMessage("Please select a variant group")
      return
    }
    if (!variant || variant === "") {
      setErrorMessage("Please select a variant")
      return
    }

    await fetch('/api/variant', {
      method: 'POST',
      body: JSON.stringify({ name: variant, price: variantPrice, variantGroupId: variantGroup }),
    })
    setErrorMessage(null)
    setVariant("")
    setVariantGroup(null)
    setVariantPrice(0.00)
  }

  if (variantError || variantGroupError) return <div>An error occured.</div>
  if (!variants || !variantgroups) return <div>Loading ...</div>

  return (
    <>
      {errorMessage && <div>{errorMessage}</div>}
      <div>
        <input type="text" name="name" id="name" value={variant} onChange={e => setVariant(e.target.value)} />
        <input type="number" name="price" id="price" step={0.01} value={variantPrice} onChange={e => setVariantPrice(+e.target.value)} />
        <select onChange={e => setVariantGroup(+e.target.value)}>
          <option value="">Select variant group</option>
          {variantgroups.map((variantgroup: ProductVariantGroup) => (
            <option key={variantgroup.id} value={variantgroup.id}>{variantgroup.name}</option>
          ))}
        </select>
        <button onClick={() => handleAddVariant()}>Add Variant Group</button>
      </div>

      <ul>
        {variants.map((variant: any) => {
          return <li key={variant.id}>{variant.name} - {variant.price} - {variant.variantGroup.name}</li>
        })}
      </ul>
    </>
  )
}

export default Variant;