import { useReducer, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { createColumnHelper, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, SortingState, useReactTable } from '@tanstack/react-table';
import { LuArrowUpDown, LuChevronLeft, LuChevronRight, LuChevronsLeft, LuChevronsRight, LuSearch } from 'react-icons/lu';
import createTodoPaginationQueryOptions from '../queryOptions/createTodoPaginationQueryOptions';

interface ResponseRowType {
  id: string;
  title: string;
  completed: string;
}

interface ResponseType {
  rows: ResponseRowType[];
  rowCount: number;
  pageCount: number;
}

interface PaginationType {
  pageIndex: number;
  pageSize: number;
}

// tanstack table column helper
const columnHelper = createColumnHelper<ResponseRowType>();

// define headers
const columns = [
  columnHelper.accessor('id', {
    header: () => (
      <div className="flex items-center text-bold">ID</div>
    ),
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('title', {
    header: () => (
      <div className="flex items-center text-bold">Name</div>
    ),
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('completed', {
    id: 'completed',
    header: () => (
      <div className="flex items-center text-bold">Status</div>
    ),
    cell: (info) => info.getValue().toString(),
  }),
];

// react component
function TansStackTableDynamic() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [globalFilter, setGlobalFilter] = useState<string>('');
  const [pagination, setPagination] = useState<PaginationType>({ pageIndex: 0, pageSize: 5 });

  // minimul way of re render dom elements
  const [, rerender] = useReducer(() => ({}), {});

  const { data, isPending, error } = useQuery<ResponseType>({
    ...createTodoPaginationQueryOptions(pagination),
    enabled: true, // can fetch data conditionally. False stop calling the query
  });

  const table = useReactTable<ResponseRowType>(({
    data: data?.rows ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      sorting, // not dynamic
      globalFilter, // not dynamic
      pagination, // dynamic
    },
    manualPagination: true,
    debugTable: true,
    rowCount: data?.rowCount,

    // for sorting feature
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,

    // for filtering feature
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setGlobalFilter,

    // for pagination feature
    onPaginationChange: setPagination,
  }));

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl text-bold">Todos - TanStack Table Dynamic</h2>
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
              isPending ? (
                <tr>
                  <td className="p-2 text-center text-blue-600 text-sm" colSpan={columns.length}>Loading...</td>
                </tr>
              ) : (
                table.getRowModel().rows.length > 0 ? (
                  table.getRowModel().rows.map((row) => (
                    <tr className="hover:bg-gray-300 odd:bg-gray-200" key={row.id}>
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
        <div className="flex justify-between items-center space-x-2">
          <button
            className="p-2 border border-gray-200 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50"
            onClick={() => table.firstPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <LuChevronsLeft size={20} />
          </button>
          <button
            className="p-2 border border-gray-200 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <LuChevronLeft size={20} />
          </button>
          <input
            min={1}
            max={table.getPageCount()}
            onChange={
              (e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0
                table.setPageIndex(page)
              }
            }
            className="border border-gray-200 rounded-md w-16 p-2 text-center"
            type="number"
            value={table.getState().pagination.pageIndex + 1}
          />
          <span>of {table.getPageCount()}</span>
          <button
            className="p-2 border border-gray-200 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <LuChevronRight size={20} />
          </button>
          <button
            className="p-2 border border-gray-200 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200 disabled:opacity-50"
            onClick={() => table.lastPage()}
            disabled={!table.getCanNextPage()}
          >
            <LuChevronsRight size={20} />
          </button>
        </div>
      </div>

      <button onClick={() => rerender()} className="border p-2 mt-4">
        Click here to Rerender. Current time: {new Date().toLocaleTimeString()}
      </button>
    </div>
  )
}

export default TansStackTableDynamic;
