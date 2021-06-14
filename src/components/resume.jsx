import React from "react";
import imageOverlay from "../img/earth.jpg";
    

class Resume extends React.Component {
    render() {
        return (
            <section
                className="paralax-mf footer-paralax bg-image sect-mt4 route"
                style={{ backgroundImage: "url(" + imageOverlay + ")",
                // display: "flex",
                justifyContent: "center",
                 //alignItems: "center"
            }}
            
            >            
                
                <div id="resume" className="brefcase" style={{backgroundImage: `url("https://fontmeme.com/permalink/210612/462a021fc5934b89422d029389a80e94.png")`}}>
                <br />
                <br />
                <div class="container">
                <p>Click here on button to download the resume.</p>
                <a class="btn btn-primary" href="https://docs.google.com/document/d/13UXhB4FybaL2-4_N_IMlcmtR9FlSCn54K1A8Ij8FTdA/edit?usp=sharing" target="_blank" rel="noreferrer" download>
                <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
                 Download Resume
                </a>
                </div>
                </div>
            </section>
        );
    }
};
  
export default Resume;