import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import NavbarWrapper from "./components/navbarWrapper";
import Footer from "./components/footer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <NavbarWrapper/>
      <App />
      <Footer/>
    </BrowserRouter>
  </StrictMode>,
);