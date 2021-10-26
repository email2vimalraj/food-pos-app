import type { NextPage } from "next";
import React from "react";
import useSWR from "swr";

import fetcher from "../../lib/fetcher";
import type { ProductCategory, ProductVariantGroup } from ".prisma/client";

const AddProduct: NextPage = () => {
  const { data: productCategories, error: productCategoriesError } = useSWR<any>('/api/productcategory', fetcher)
  const { data: variantGroups, error: variantGroupError } = useSWR<any>('/api/variantgroup', fetcher)
  const [product, setProduct] = React.useState<string>("")
  const [productPrice, setProductPrice] = React.useState<number>(0.00)
  const [productCategory, setProductCategory] = React.useState<number | null>(null)
  const [variantGroup, setVariantGroup] = React.useState<number | null>(null)
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null)

  const handleAddProduct = async () => {
    if (!variantGroup) {
      setErrorMessage("Please select a variant group")
      return
    }
    if (!productCategory) {
      setErrorMessage("Please select a product category")
      return
    }
    if (!product || product === "") {
      setErrorMessage("Please enter product name")
      return
    }

    await fetch('/api/product', {
      method: 'POST',
      body: JSON.stringify({ name: product, price: productPrice, categoryId: productCategory, productVariantGroupId: variantGroup }),
    })
    setErrorMessage(null)
    setProduct("")
    setVariantGroup(null)
    setProductCategory(null)
    setProductPrice(0.00)
  }

  if (variantGroupError || productCategoriesError) return <div>An error occured.</div>
  if (!variantGroups || !productCategories) return <div>Loading ...</div>

  return (
    <>
      {errorMessage && <div>{errorMessage}</div>}
      <div>
        <input type="text" name="name" id="name" value={product} onChange={e => setProduct(e.target.value)} />
        <input type="number" name="price" id="price" step={0.01} value={productPrice} onChange={e => setProductPrice(+e.target.value)} />
        <select onChange={e => setProductCategory(+e.target.value)}>
          <option value="">Select Product Category</option>
          {productCategories.map((productCategory: ProductCategory) => (
            <option key={productCategory.id} value={productCategory.id}>{productCategory.name}</option>
          ))}
        </select>
        <select onChange={e => setVariantGroup(+e.target.value)}>
          <option value="">Select variant group</option>
          {variantGroups.map((variantgroup: ProductVariantGroup) => (
            <option key={variantgroup.id} value={variantgroup.id}>{variantgroup.name}</option>
          ))}
        </select>
        <button onClick={() => handleAddProduct()}>Add Variant Group</button>
      </div>
    </>
  )
}

export default AddProduct;