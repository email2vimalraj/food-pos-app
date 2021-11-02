import Table, { SelectColumnFilter } from '@components/table';
import type { NextPage } from 'next';
import React from 'react';
// import useSWR from 'swr';

// import fetcher from '@lib/fetcher';

// const Products: NextPage = () => {
//   const { data, error } = useSWR<any>('/api/product', fetcher);

//   if (error) return <div>An error occured.</div>;
//   if (!data) return <div>Loading ...</div>;

//   return (
//     <>
//       <ul>
//         {data.map((product: any) => {
//           return (
//             <li key={product.id}>
//               {product.name} - {product.price}
//             </li>
//           );
//         })}
//       </ul>
//     </>
//   );
// };

const getData = () => {
  const data = [
    {
      name: 'Jane Cooper',
      email: 'jane.cooper@example.com',
      title: 'Regional Paradigm Technician',
      department: 'Optimization',
      status: 'Active',
      role: 'Admin',
      imgUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      age: 27
    },
    {
      name: 'Cody Fisher',
      email: 'cody.fisher@example.com',
      title: 'Product Directives Officer',
      department: 'Intranet',
      status: 'Active',
      role: 'Owner',
      imgUrl:
        'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      age: 32
    },
    {
      name: 'Esther Howard',
      email: 'esther.howard@example.com',
      title: 'Forward Response Developer',
      department: 'Directives',
      status: 'Active',
      role: 'Member',
      imgUrl:
        'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      age: 26
    },
    {
      name: 'Jenny Wilson',
      email: 'jenny.wilson@example.com',
      title: 'Central Security Manager',
      department: 'Program',
      status: 'Active',
      role: 'Member',
      imgUrl:
        'https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      age: 72
    },
    {
      name: 'Kristin Watson',
      email: 'kristin.watson@example.com',
      title: 'Lean Implementation Liaison',
      department: 'Mobility',
      status: 'Active',
      role: 'Admin',
      imgUrl:
        'https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      age: 27
    },
    {
      name: 'Cameron Williamson',
      email: 'cameron.williamson@example.com',
      title: 'Internal Applications Engineer',
      department: 'Security',
      status: 'Active',
      role: 'Member',
      imgUrl:
        'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      age: 12
    }
  ];

  return [...data, ...data, ...data];
};

const Products: NextPage = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name'
      },
      {
        Header: 'Age',
        accessor: 'age'
      },
      {
        Header: 'Title',
        accessor: 'title'
      },
      {
        Header: 'Status',
        accessor: 'status'
      },
      {
        Header: 'Role',
        accessor: 'role',
        Filter: SelectColumnFilter,
        filter: 'includes'
      }
    ],
    []
  );

  const data = React.useMemo(() => getData(), []);

  return (
    <>
      <h1 className="text-3xl font-bold">Products</h1>

      <div className="mt-4">
        <Table columns={columns} data={data} />
      </div>
    </>
  );
};

export default Products;
