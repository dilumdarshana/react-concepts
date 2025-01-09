import { JSX, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import DefaultLayout from './layouts/Default';
import { CounterProvider } from './contexts/Counter';
import Home from './pages/Home';
import Form from './pages/Form';
import Users from './pages/Users';
import Hooks from './pages/Hooks';
import { SiteDataProvider } from './contexts/SiteData';
import MyErrorBoundary from './components/ErrorBoundary';
import ErrorFallback from './components/common/ErrorFallback';
import './index.css';

const withErrorBoundary = (Component: React.ComponentType) =>  
  (props: any): JSX.Element => (
    <MyErrorBoundary fallback={<ErrorFallback />}>
      <Component {...props} />
    </MyErrorBoundary>
  );

const UserWithErrorBoundary = withErrorBoundary(Users);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <SiteDataProvider>
      <CounterProvider>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<Home />} />
            <Route path='/form' element={<Form />} />
            <Route path='/users' element={<UserWithErrorBoundary />} />
            <Route path='/hooks' element={<Hooks />} />
          </Route>
        </Routes>
      </CounterProvider>
    </SiteDataProvider>
    </BrowserRouter>
  </StrictMode>,
);
