import video from "../../assets/videos/amcbackground.mp4";
import styles from "./Homesec1.module.css"
import { useEffect } from "react";

export default function HomeSec1() {

  useEffect(() => {
    let loop = setInterval(()=>{
      if (window.scrollY > 1) {
        clearInterval(loop)
        document.querySelectorAll("[class*='video']")[0].classList.add(styles.backImgAni)
        console.log(document.querySelectorAll("[class*='video']")[0].classList)
        console.log("hello");
        document.querySelectorAll("[class*='welcome']")[0].style.transform = "translateX(0%)";
        document.getElementById("deleteMe").style.display = "none"
      }
      // if (window.scrollY < 1 && atTop === false) {
      //   atTop = true;
      //   document.querySelectorAll("[class*='welcome']")[0].style.transform = "translateX(-200%)";
      //   document.getElementById("deleteMe").style.display = "block";
      //   document.querySelectorAll("[class*='video']")[0].style.cssText = "width:100%;height:100%;border-radius:0px;margin:none;";
      // }
    })
  }, []);
  
  return (
    <section className={styles.container} id="home">
      <video controls autoPlay muted loop className={styles.video}>
        <source src={video} type="video/mp4" />
      </video>
      <p id="deleteMe" className={styles.downArrow}><i className="fa-solid fa-angle-down"></i></p>
      <div className={styles.welcome}>
        <h1 style={{ fontSize: "60px" }}>AMC is now<br />at Super Nova!</h1>
        {/* <p>Buy tickets <i className="fa-solid fa-angle-down"></i></p> */}
        <button className={styles.ticketBtn}><a style={{color: "black"}} href="/ticket">Tickets</a></button>
      </div>
    </section>
  )
}