import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router';
import UseQuery from './pages/UseQuery';
import UseSuspenseQuery from './pages/UseSuspenseQuery';
import Layout from './layouts/Layout';
import './index.css';
import UseQueryWIthParams from './pages/UseQueryWIthParams';
import UseQueriesAsync from './pages/UseQueriesAsync';
import UseQueriesSync from './pages/UseQueriesSync';
import TanStackTable from './pages/TanStackTable';
import TansStackTableDynamic from './pages/TanStackTableDynamic';;

import { RouterProvider, createRouter } from '@tanstack/react-router'

const queryClient = new QueryClient();

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <QueryClientProvider client={queryClient}>
//       <BrowserRouter>
//         <Routes>
//           <Route element={<Layout />} >
//             <Route path='/' element={<UseQuery />} />
//             <Route path='/use-suspense' element={<UseSuspenseQuery />} />
//             <Route path='/use-query-multiple-async' element={<UseQueriesAsync />} />
//             <Route path='/use-query-multiple-sync' element={<UseQueriesSync />} />
//             <Route path='/usequery-params' element={<UseQueryWIthParams />} />
//             <Route path='/tanstack-table' element={<TanStackTable />} />
//             <Route path='/tanstack-table-dynamic' element={<TansStackTableDynamic />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </QueryClientProvider>
//   </StrictMode>,
// )

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement)
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </StrictMode>,
  )
}

