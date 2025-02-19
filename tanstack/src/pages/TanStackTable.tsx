import { faker } from '@faker-js/faker';
import { createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getSortedRowModel, SortingState, useReactTable } from '@tanstack/react-table';
import { useState } from 'react';
import { LuArrowUpDown, LuSearch } from 'react-icons/lu';

interface UserType {
  id: string;
  name: string;
  email: string;
}

// for faker
function randomUser(): UserType {
  return {
    id: faker.string.ulid(),
    name: faker.person.firstName(),
    email: faker.internet.email(),
  };
}

// list of fake users
const users = faker.helpers.multiple(randomUser, {
  count: 10,
});

// tanstack table column helper
const columnHelper = createColumnHelper<UserType>();

// define headers
const columns = [
  columnHelper.accessor('id', {
    header: () => (
      <div className="flex items-center text-bold">ID</div>
    ),
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('name', {
    header: () => (
      <div className="flex items-center text-bold">Name</div>
    ),
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('email', {
    id: 'email',
    header: () => (
      <div className="flex items-center text-bold">Email</div>
    ),
    cell: (info) => info.getValue(),
  }),
];

// react component
function TansStackTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState<string>('');
  const table = useReactTable<UserType>(({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      sorting,
      globalFilter
    },
    initialState: {
      pagination: {
        pageSize: 5,
      },
    },
    // for sorting feature
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,

    // for filtering feature
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setGlobalFilter,
  }));

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl text-bold">Users</h2>
      <div className="py-3 bt-white overflow-x-auto shadow-md rounded-lg">
        <div className="mb-4 relative">
          <input
            value={globalFilter ?? ''}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="w-full border pl-10 pr-4 py-2 borde-gray-200 rounded shadow-sm focus:rign-indigo-5 focus:border-indigo-500"
            placeholder="Start typing..."
          />
          <LuSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={20} />
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            {
              table.getHeaderGroups().map((group) => (
                <tr key={group.id}>
                  {
                    group.headers.map((header) => (
                      <th
                        key={header.id}
                        className="px-6 py-2 text-left traking-wider text-gray-500 tracking-wider"
                      >
                        <div
                          className={
                            header.column.getCanSort()
                              ? "cursor-pointer select-none flex items-center"
                              : ""
                          }
                          onClick={header.column.getToggleSortingHandler()}
                        >
                          {
                            flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )
                          }
                          <LuArrowUpDown className="ml-2" size={14} />
                        </div>
                      </th>
                    ))
                  }
                </tr>
              ))
            }
          </thead>
          <tbody className="bt-white divide-y divide-gray-200">
            {
              table.getRowModel().rows.length > 0 ? (
                table.getRowModel().rows.map((row) => (
                  <tr className="hover:bg-gray-300" key={row.id}>
                    {
                      row.getVisibleCells().map((cell) => (
                        <td className="p-2 whitespace-nowrap text-sm text-gray-500" key={cell.id}>
                          {
                            flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext()
                            )
                          }
                        </td>
                      ))
                    }
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="p-2 text-center text-red-700 text-sm" colSpan={columns.length}>No users found.</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center mt-4 text-sm text-gray-700">
        <div className="flex items-center mb-4 sm:mb-0">
          <span className="mr-2">Items per page</span>
          <select
            className="border border-gray-300 rounded-md shadow-sm p-2"
            value={table.getState().pagination.pageSize}
            onChange={
              (e) => {
                table.setPageSize(Number(e.target.value))
              }
            }
          >
            {
              [5, 10, 20, 50].map((size) => (
                <option key={size} value={size}>{size}</option>
              ))
            }
          </select>
        </div>
        <div>
          b
        </div>
      </div>
    </div>
  )
}

export default TansStackTable;
