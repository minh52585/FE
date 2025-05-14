import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';              // Import Tailwind hoặc CSS global
import App from './App';           // Component gốc 
import reportWebVitals from './reportWebVitals'; // Đo hiệu năng 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement 
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
