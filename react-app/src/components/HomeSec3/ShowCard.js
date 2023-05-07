import styles from "./ShowCard.module.css";

import BCSImage from "../../assets/images/showCards/betterCallSaul.png";
import BBImage  from '../../assets/images/showCards/breakingBad.jpg'
import DWImage from '../../assets/images/showCards/darkWinds.jpg'
import IVImage from '../../assets/images/showCards/interviewVampire.jpg'
import MWImage from '../../assets/images/showCards/mayfairWitches.jpg'
import WDImage from '../../assets/images/showCards/walkingDead.jpg'


export default function ShowCard() {
  return (
    <>
      <div className={`card ${styles.container}`}>
        <a href="/BCS" className={styles.text}>
          <img className={`card-img-top ${styles.image}`} src={BCSImage} alt="better call saul" />
          <div className="card-body">
            <p>Better Call Saul</p>
          </div>      
        </a>
      </div>
      <div className={`card ${styles.container}`}>
        <a href="/BB" className={styles.text}>
          <img className={`card-img-top ${styles.image}`} src={BBImage} alt="breaking bad" />
          <div className="card-body">
            <p>Breaking Bad</p>
          </div>  
        </a>
      </div>
      <div className={`card ${styles.container}`}>
        <a href="/DW" className={styles.text}>
          <img className={`card-img-top ${styles.image}`} src={DWImage} alt="dark winds" />
          <div className="card-body">
            <p>Dark Winds</p>
          </div>
        </a>
      </div>
      <div className={`card ${styles.container}`}>
        <a href="/IWTV" className={styles.text}>
          <img className={`card-img-top ${styles.image}`} src={IVImage} alt="interview with the vampire" />
          <div className="card-body">
            <p>Interview With the Vampire</p>
          </div>
        </a>
      </div>
      <div className={`card ${styles.container}`}>
        <a href="/MW" className={styles.text}>
          <img className={`card-img-top ${styles.image}`} src={MWImage} alt="mayfair witches" />
          <div className="card-body">
            <p>Mayfair Witches</p>
          </div>
        </a>
      </div>
      <div className={`card ${styles.container}`}>
        <a href="/WD" className={styles.text}>
          <img className={`card-img-top ${styles.image}`} src={WDImage} alt="walking dead" />
          <div className="card-body">
            <p>Walking Dead</p>
          </div>
        </a>
      </div>
    </>
  )
}