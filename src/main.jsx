import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from './Basis/App.jsx'
// import AppLink from './Link/AppLink.jsx'
import AppParams from "./UseParams/AppParams";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppParams />
  </StrictMode>
);
