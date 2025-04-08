import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import DefaultLayout from './layouts/Default';
import { CounterProvider } from './contexts/Counter';
import Home from './pages/Home';
import Form from './pages/Form';
import { SiteDataProvider } from './contexts/SiteData';
import Transition from './pages/Transition';
import Debounce from './pages/Debounce';
import UseRef from './pages/UseRef';
import { UserWithErrorBoundary } from './components/WithErrorBoundary';
import ReactHookForm from './pages/ReactHookForm';
import UseLayoutEffect from './pages/UseLayoutEffect';
import HowReactWorks from './pages/HowReactWorks';
import './index.css';
import Use from './pages/Use';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SiteDataProvider>
        <CounterProvider>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path='/' element={<Home />} />
              <Route path='/form' element={<Form />} />
              <Route path='/react-hook-form' element={<ReactHookForm />} />
              <Route path='/users' element={<UserWithErrorBoundary />} />
              <Route path='/transition' element={<Transition />} />
              <Route path='/debounce' element={<Debounce />} />
              <Route path='/useref' element={<UseRef />} />
              <Route path='/use-layout-effect' element={<UseLayoutEffect />} />
              <Route path='/how-react-works' element={<HowReactWorks />} />
              <Route path='/use' element={<Use />} />
            </Route>
          </Routes>
        </CounterProvider>
      </SiteDataProvider>
    </BrowserRouter>
  </StrictMode>,
);
