import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CategoryProvider } from './contexts/searchCategories';
import { UserStore } from './contexts/menuContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <UserStore>
      <CategoryProvider>
        <App />
      </CategoryProvider>
    </UserStore>
  </React.StrictMode>
);


