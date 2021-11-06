import Table, { SelectColumnFilter } from '@components/table';
import type { NextPage } from 'next';
import React from 'react';
import useSWR from 'swr';

import fetcher from '@lib/fetcher';

const Products: NextPage = () => {
  const { data, error } = useSWR<any>('/api/product', fetcher);

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Price',
        accessor: 'price'
      },
      {
        Header: 'Tax Group',
        accessor: 'taxGroup.name',
        Filter: SelectColumnFilter,
        filter: 'includes'
      },
      {
        Header: 'Category',
        accessor: 'category.name',
        Filter: SelectColumnFilter,
        filter: 'includes'
      },
      {
        Header: 'Variant Group',
        accessor: 'variantGroup.name',
        Filter: SelectColumnFilter,
        filter: 'includes'
      }
    ],
    []
  );

  if (error) return <div>An error occured.</div>;
  if (!data) return <div>Loading ...</div>;

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Products</h1>
        <a
          href="/products/add"
          className="bg-driftwood-500 text-alabaster-500 p-2 rounded shadow-lg hover:bg-driftwood-600 hover:text-alabaster-400 no-underline outline-none"
        >
          Add Products
        </a>
      </div>

      <div className="mt-4">
        <Table columns={columns} data={data} />
      </div>
    </>
  );
};

export default Products;
