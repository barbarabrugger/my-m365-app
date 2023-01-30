import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Providers } from "@microsoft/mgt-element";
import { Msal2Provider } from "@microsoft/mgt-msal2-provider";

Providers.globalProvider = new Msal2Provider({
  clientId: "636ea8b4-2318-4c40-ac96-9f9af7be5aac",
  scopes: [
    "files.readwrite.all",
    "user.read",
    "openid",
    "profile",
    "people.read",
    "user.readbasic.all",
  ],
});

const root = ReactDOM.createRoot(
  document.getElementById('root')
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);