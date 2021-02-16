import React from "react";
//import "./stars.scss";
import Typed from "react-typed";
//import bigImage from "../img";

class Intro extends React.Component {
  render() {
    return (
       <div id="home" className="intro route bg-image" style={{backgroundImage: `url("https://media.giphy.com/media/1oF1KAEYvmXBMo6uTS/giphy.gif")`}}>
        <div className="intro-content display-table">
          <div className="table-cell">
            <div className="container">
              <h1 className="intro-title mb-4">Hello, I am Evan Gerweck</h1>
              <p className="intro-subtitle">
                <span className="text-slider-items"></span>
                <strong className="text-slider">
                  <Typed
                    strings={[
                      "Front End Developer",
                      "Back End Developer",
                      "Software Engineer",
                      "Artist"
                    ]}
                    typeSpeed={80}
                    backDelay={1100}
                    backSpeed={30}
                    loop
                  />
                </strong>
              </p>
              <p className="pt-3">
                <a
                  className="btn btn-primary btn js-scroll px-4"
                  href="#work"
                  role="button"
                >
                  View My Work
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
