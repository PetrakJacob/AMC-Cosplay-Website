import NavBar from "../../components/NavBar/NavBar.js";
import HomeSec1 from "../../components/HomeSec1/HomeSec1.js"
import HomeSec2 from "../../components/HomeSec2/HomeSec2.js"
import HomeSec3 from "../../components/HomeSec3/HomeSec3.js"
import Footer from "../../components/Footer/Footer.js"

import "../../assets/styles/Home.css"

export default function Home() {
  return(
    <>
      <NavBar names={["home", "info", "shows"]}/>
      <HomeSec1/>
      <HomeSec2/>
      <HomeSec3/>
      <Footer/>
    </>
  )
};

