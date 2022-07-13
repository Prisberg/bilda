import React from 'react';
import ReactDOM from 'react-dom/client';
import './utils/style.css';
import App from './components/App';
import QuizProvider from './utils/Context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </React.StrictMode>
);