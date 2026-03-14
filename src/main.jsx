import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Stairs from "./components/common/Stairs.jsx";
import SmoothScroll from "./components/common/SmoothScroll.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Stairs>
        <SmoothScroll>
          <App />
        </SmoothScroll>
      </Stairs>
    </BrowserRouter>
  </StrictMode>,
);
