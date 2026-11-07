import React from 'react';
import ReactDOM from 'react-dom/client';
import './lib/i18n'; // before App, so the first paint is tr-TR
import App from './App';
import { initAnalytics } from './lib/analytics';
import './index.css';

// An analytics error must not block the first paint.
try {
  initAnalytics();
} catch (e) {
  // If analytics throws, the app still opens.
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
