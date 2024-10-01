import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
// import StarRating from "./StarRating/StarRating";
// import App from "./App.jsx";
import App1 from "./App-v1.jsx";
import "./index.css";

// const Test = () => {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="green" onSetRating={setMovieRating} />
//       <p>this movie was rated {movieRating} sstars</p>
//     </div>
//   );
// };

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App1 />
    {/* <StarRating maxRating={5} />
    <StarRating maxRating={10} size={24} color="red" />
    <StarRating message={["Terrible", "Bad", "okay", "Good", "Excellent"]} />
    <StarRating
      maxRating={20}
      size={50}
      color="pink"
      className="test"
      defaultRating={3}
    /> */}
    {/* <Test /> */}
  </StrictMode>
);
