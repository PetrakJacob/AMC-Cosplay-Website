import NavBar from "../../../components/NavBar/NavBar.js";
import Footer from "../../../components/Footer/Footer.js"
import Sec1 from "./Home/Home.js";
import Sec2 from "./Detail/Detail.js";
import Sec3 from './Ticket/Ticket.js'

export default function Home() {
  return (
    <div style={{ backgroundColor: "black", padding: "0px", margin: "0px" }}>
      <NavBar names={["home", "details", "buy ticket"]} />
      <Sec1/>
      <Sec2/>
      <Sec3/>
      <Footer />
    </div>
  )
};