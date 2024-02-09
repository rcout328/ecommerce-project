import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import AppRouter from "./Components/Approuter";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-vkvzlh8ye5ywc864.us.auth0.com"
      clientId="g8CP9TC2MbeL6kvR4aadnqnXxnrEpRUV"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <AppRouter />
    </Auth0Provider>
  </React.StrictMode>
);
