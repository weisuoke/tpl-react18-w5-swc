import * as React from 'react';
import { createRoot } from 'react-dom/client';
import './tailwindcss.css';

const root = document.getElementById('root') as HTMLElement;

const App = () => {
  console.log('process.env.TEST ===', process.env.REACT_APP_TEST);
  return (
    <div>
      React
      <div className="less">Feature: less</div>
      <div className="bg-red-900 text-white">tailwind css demo</div>
    </div>
  );
};

createRoot(root).render(<App />);
