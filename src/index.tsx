import * as React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

import './tailwindcss.css';
import './a.css';

const root = document.getElementById('root') as HTMLElement;

createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
