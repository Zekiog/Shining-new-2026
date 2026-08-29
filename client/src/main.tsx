import React from 'react';
import ReactDOM from 'react-dom/client';
import './lib/i18n'; // ← MUST be imported before App so translations are ready on first render
import App from './App';
import { initAnalytics } from './lib/analytics';
import './index.css';

// Minimal, safe bootstrap: analytics errors must never block render
try {
  initAnalytics();
} catch (e) {
  // Silent fail: app must render even if analytics fails
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Failed to find #root element');
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
