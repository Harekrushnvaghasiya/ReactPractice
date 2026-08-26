import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import NavbarWrapper from "./components/navbarWrapper";
import Footer from "./components/footer";
import { appLinks, footerContent, galleryImages, socialLinks } from "./helpers/raw";
import logo from "./assets/images/logo.svg"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <NavbarWrapper />
      <App />
      <Footer
        logo={logo}
        galleryImages={galleryImages}
        tagline={footerContent.tagline}
        newsletter={footerContent.newsletter}
        footerLinks={footerContent.footerLinks}
        disclaimer={footerContent.disclaimer}
        copyright={footerContent.copyright}
        socialLinks={socialLinks}
        appLinks={appLinks}
      />
    </BrowserRouter>
  </StrictMode>,
);