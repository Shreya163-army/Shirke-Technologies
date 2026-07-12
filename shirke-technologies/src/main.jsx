import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';

import './index.css';
import App from './App.jsx';

import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS
AOS.init({
  duration: 900,
  easing: 'ease-in-out',
  once: true,
  offset: 80,
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
    <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
          style: {
            background: '#111827',
            color: '#fff',
            border: '1px solid #2563eb',
          },
        }}
      />
    <App />
    </>
  </StrictMode>,
);