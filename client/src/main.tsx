import React from 'react';
import ReactDOM from 'react-dom/client';
import './lib/i18n'; // App'ten önce: ilk çizimde dil tr-TR olsun
import App from './App';
import { initAnalytics } from './lib/analytics';
import './index.css';

// Analitik hatası ilk çizimi kesmez.
try {
  initAnalytics();
} catch (e) {
  // Analitik düşerse uygulama yine açılır.
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
