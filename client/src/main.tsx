import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./routes/router.tsx";
import { CountProvider } from "./contexts/CountContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CountProvider>
      <Router />
    </CountProvider>
  </StrictMode>,
);
