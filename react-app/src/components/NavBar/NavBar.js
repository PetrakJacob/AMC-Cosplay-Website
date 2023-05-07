import { useEffect } from "react";
import logo from "../../assets/images/AMC_Logo.svg";
import "./NavBar.css"
import ProgressionBar from "./ProgressionBar.js";

export default function NavBar(props) {

  useEffect(() => {
    let loop = setInterval(() => {
      if (window.scrollY > 1) {
        clearInterval(loop)
        document.getElementsByClassName("BackgroundColChg")[0].style.backgroundColor = "rgba(4, 8, 11, 0.9)"
      }
    })
  }, []);

  return (
    <>   
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top BackgroundColChg" >
        <div className="container-fluid">
          <a className="navbar-brand" href="/"><img src={logo} alt="AMC Logo" width="75px" height="30px" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" 
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav navbar-nav ms-auto">
              <ProgressionBar names={props.names} />
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};