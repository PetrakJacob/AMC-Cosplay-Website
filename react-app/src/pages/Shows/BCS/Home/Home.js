import styles from './Home.module.css'
import img from '../../../../assets/images/telephone.png'
// import {Image} from 'react'

export default function Home() {
  return (
    <section className={styles.container} id="home">
      <img src={"https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Better_Call_Saul_logo.svg/1200px-Better_Call_Saul_logo.svg.png"} alt="background" width="100px" height="100px" className={styles.backImg}/>
      <p className={styles.downArrow}><i className="fa-solid fa-angle-down"></i></p>
    </section>
  )
}