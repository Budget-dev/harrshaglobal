import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import './index.css';

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

const redirectPath = sessionStorage.getItem('redirect_path');
if (redirectPath) {
  sessionStorage.removeItem('redirect_path');
  window.history.replaceState(null, '', '/' + redirectPath);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);
