import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from './Basis/App.jsx'
// import AppLink from './Link/AppLink.jsx'
// import AppParams from "./UseParams/AppParams.jsx";
// import AppNested from "./NestedRoutes/AppNested.jsx";
import AppHead from "./Head/AppHead.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppHead />
  </StrictMode>
);
