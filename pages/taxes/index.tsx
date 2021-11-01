import type { NextPage } from 'next';
import React from 'react';
import useSWR from 'swr';

import fetcher from '@lib/fetcher';

const Taxes: NextPage = () => {
  const { data: taxes, error: taxesError } = useSWR<any>('/api/tax', fetcher);

  if (taxesError) return <div>An error occured.</div>;
  if (!taxes) return <div>Loading ...</div>;

  return (
    <>
      <ul>
        {taxes.map((tax: any) => {
          return (
            <li key={tax.id}>
              {tax.name} - {tax.taxPercent}% - {tax.taxGroup.name}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Taxes;
