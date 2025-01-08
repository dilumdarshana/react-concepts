import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import DefaultLayout from './layouts/Default';
import Home from './pages/Home';
import { CounterProvider } from './contexts/Counter';


import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <CounterProvider>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<Home />} />
          </Route>
        </Routes>
      </CounterProvider>
    </BrowserRouter>
  </StrictMode>,
);
