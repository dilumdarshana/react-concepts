import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './pages/Home';
import Default from './layouts/Default';
import Sample from './pages/Sample';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
        <Routes>
          <Route element={<Default />} >
            <Route path='/' element={<Home />} />
            <Route path='/sample' element={<Sample name={'Apache'} />} />
          </Route>
        </Routes>
      </BrowserRouter>
  </StrictMode>,
)
