import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Slide } from "./screens/Slide";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Slide />
  </StrictMode>,
);
