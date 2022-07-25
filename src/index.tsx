import React from 'react';
import ReactDOM from 'react-dom/client';
import './utils/style.css';
import App from './components/App';
import QuizProvider from './utils/Context';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  typography: {
    fontFamily: [
      'Julius Sans One',
      'Fanwood Text',
    ].join(','),
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QuizProvider>
      <ThemeProvider theme={darkTheme}>
        <App />
      </ThemeProvider>
    </QuizProvider>
  </React.StrictMode>
);
