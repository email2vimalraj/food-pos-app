import type { NextPage } from "next";
import React from "react";
import useSWR from "swr";

import fetcher from "../../lib/fetcher";
import type { TaxGroup } from ".prisma/client";

const TaxGroups: NextPage = () => {
  const { data, error } = useSWR<any>('/api/taxgroup', fetcher)

  if (error) return <div>An error occured.</div>
  if (!data) return <div>Loading ...</div>

  return (
    <>
      <ul>
        {data.map((taxGroup: TaxGroup) => (
          <li key={taxGroup.id}>{taxGroup.name}</li>
        ))}
      </ul>
    </>
  );
};

export default TaxGroups;