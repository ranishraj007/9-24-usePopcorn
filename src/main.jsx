import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import StarRating from "./StarRating/StarRating";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <StarRating maxRating={5}/> */}
    {/* <StarRating maxRating={10}/>
    <StarRating /> */}
  </StrictMode>
);
