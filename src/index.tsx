import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import theme from './theme';
import { ThemeProvider } from '@mui/system';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.ts/store';

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    </ThemeProvider>
  </Router>,
  document.getElementById('root'),
);
