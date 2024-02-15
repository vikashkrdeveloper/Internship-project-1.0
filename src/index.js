import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import CreatContextState from './components/context/Create_Context_State';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <CreatContextState>
      <App />
    </CreatContextState>
  </BrowserRouter>
);