import './index.css';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router';
import { hydrateRoot } from 'react-dom/client';
import { Router } from './router';

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>,
);
