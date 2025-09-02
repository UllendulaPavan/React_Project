import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { VideoIndex } from "./Video-Podcast/video-Index";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <VideoIndex />
  </StrictMode>
);
