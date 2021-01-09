import React from "react";
import "./App.css";
import Cellphone from "./components/Cellphone/Cellphone";
import Slide from "./components/Slide/Slide";
import imgiCampus from "./img/imgiCampus.png";
import imgSge from "./img/imgSge.png";

function App() {
  return (
    <div className="container">
      <div className="container-cellphone">
        <Cellphone>
          <Slide>
            <div>
              <img src={imgiCampus} alt="" width="100%" />
            </div>
            <div>
              <img src={imgSge} alt="" width="100%" />
            </div>
          </Slide>
        </Cellphone>
      </div>
    </div>
  );
}

export default App;
