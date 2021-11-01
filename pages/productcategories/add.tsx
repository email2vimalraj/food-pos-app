import type { NextPage } from 'next';
import React from 'react';

const AddProductCategories: NextPage = () => {
  const [productCategory, setProductCategory] = React.useState<string>('');

  const handleAddProductCategory = async () => {
    await fetch('/api/productcategory', {
      method: 'POST',
      body: JSON.stringify({ name: productCategory })
    });
  };

  return (
    <>
      <div>
        <input
          type="text"
          name="name"
          id="name"
          value={productCategory}
          onChange={e => setProductCategory(e.target.value)}
        />
        <button onClick={() => handleAddProductCategory()}>Add Product Category</button>
      </div>
    </>
  );
};

export default AddProductCategories;
