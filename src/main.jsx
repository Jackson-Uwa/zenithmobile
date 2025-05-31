import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import "./utils/fonts/css/all.css";

import App from './container/App.jsx';

import { BrowserRouter as Router } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
)
