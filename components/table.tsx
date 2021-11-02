import React from 'react';
import { useAsyncDebounce, useFilters, useGlobalFilter, useSortBy, useTable } from 'react-table';

// This is a custom filter UI for selecting a unique option from list
export const SelectColumnFilter = ({
  column: { filterValue, setFilter, preFilteredRows, id }
}: any) => {
  // Calculate the options for filtering using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set();
    preFilteredRows.forEach((row: any) => {
      options.add(row.values[id]);
    });
    return [...options.values()];
  }, [id, preFilteredRows]);

  // Render a multi-select box
  return (
    <select
      name={id}
      id={id}
      value={filterValue}
      onChange={e => {
        setFilter(e.target.value || undefined);
      }}
    >
      <option value="">All</option>
      {options.map((option: any, i: number) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

const GlobalFilter = ({ preGlobalFilteredRows, globalFilter, setGlobalFilter }: any) => {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = React.useState(globalFilter);

  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <span>
      Search:{' '}
      <input
        value={value || ''}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
      />
    </span>
  );
};

type Props = {
  columns: any;
  data: any;
};

const Table = ({ columns, data }: Props) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state,
    preGlobalFilteredRows,
    setGlobalFilter
  } = useTable(
    {
      columns,
      data
    },
    useFilters,
    useGlobalFilter,
    useSortBy
  );

  return (
    <>
      {/* <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
      /> */}

      {headerGroups.map(headerGroup =>
        headerGroup.headers.map(column =>
          column.Filter ? (
            <div key={column.id}>
              <label htmlFor={column.id}>{column.render('Header')}: </label>
              {column.render('Filter')}
            </div>
          ) : null
        )
      )}

      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {/* Add a sort direction indicator */}
                  <span>{column.isSorted ? (column.isSortedDesc ? ' ▼' : ' ▲') : ''}</span>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div>
        <pre>
          <code>{JSON.stringify(state, null, 2)}</code>
        </pre>
      </div>
    </>
  );
};

export default Table;
