import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./plants/plants.css";
import "./cart/cart.css";
import App from "./App.jsx";
import { DataProvider } from "./Context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider>
      <App />
    </DataProvider>
  </StrictMode>
);
