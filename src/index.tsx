import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css';

const client = new QueryClient();
ReactDOM.render(
  <QueryClientProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </QueryClientProvider>,
  document.getElementById('root')
);
