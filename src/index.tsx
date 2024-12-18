import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { QClient } from "@quorini/qui-core";
import { QAuth, QGql } from '@quorini/qui-react';
import * as queries from './graphql/quorini-queries';
import * as mutations from './graphql/quorini-mutations';
import { createCustomerInput } from './graphql/quorini-mutations';

QClient.configure({
  projectId: "675792178ee63980860b1e80",
  env: 'development',
  graphql: {
    queries,
    mutations,
  },
  signupInputType: {} as createCustomerInput
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QAuth.Provider>
      <QGql.Provider>
        <App />
      </QGql.Provider>
    </QAuth.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
