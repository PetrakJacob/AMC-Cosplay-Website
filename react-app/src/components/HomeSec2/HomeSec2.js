import styles from "./HomeSec2.module.css";
import HQImg from "../../assets/images/HQ.jpg";
import amcDevices from "../../assets/images/amcDevices.png";

export default function HomeSec2() {

  return (
    // <section className={styles.secContainer}>
      <div className={styles.textContainer} id="info">
        <div className={styles.about}>
          <img src={HQImg} alt="Adam Aron" className={styles.infoImg}></img>
          <h2 className={styles.infoTitle}>About us</h2>
          <p className={styles.infoPara}>AMC is an American multinational basic cable television channel that is the flagship property of AMC Networks. The channel's programming primarily consists of theatrically released films, along with a limited amount of original programming.</p>
        </div>
        <div className={styles.services}>
          <img src={amcDevices} alt="AMC on multiple devices" className={styles.infoImg}></img>
          <h2 className={styles.infoTitle}>Services</h2>
          <p className={styles.infoPara}>Here at AMC we want to further extend the range of devices we can go on. So when your catching the bus, you can go grab your phone and start watching your favourite shows. Now you can catch us on your phone, tablet, computer and TV.</p>
        </div>
      </div>
    // </section>
  )
}