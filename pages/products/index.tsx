import type { NextPage } from 'next';
import React from 'react';
import useSWR from 'swr';

import fetcher from '@lib/fetcher';

const Products: NextPage = () => {
  const { data, error } = useSWR<any>('/api/product', fetcher);

  if (error) return <div>An error occured.</div>;
  if (!data) return <div>Loading ...</div>;

  return (
    <>
      <ul>
        {data.map((product: any) => {
          return (
            <li key={product.id}>
              {product.name} - {product.price}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Products;
