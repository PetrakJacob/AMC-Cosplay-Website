import logo from "../../assets/images/AMC_Logo.svg";
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={`d-flex flex-wrap justify-content-between align-items-center py-3 border-top ${styles.noSpacing}`} style={{ margin: "0 5vw", padding: "0px", border: "none", overflow:"hidden" }}>
      <div className="col-md-4 d-flex align-items-center">
        <a href="/" className={`mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1 ${styles.grow}`}>
          <img src={logo} alt="AMC logo" width="50px" height="50px"/>
        </a>
        <span className="mb-3 mb-md-0 text-muted">© 2022 AMC</span>
      </div>

      <ul className="nav col-md-4 justify-content-end list-unstyled d-flex" >
        <li className={`ms-3 ${styles.grow}`}><a className="text-muted" href="https://twitter.com/amc_tv"><i className="fa-brands fa-twitter"></i></a></li>
        <li className={`ms-3 ${styles.grow}`}><a className="text-muted" href="https://www.instagram.com/amc_tv/?hl=en"><i className="fab fa-instagram"></i></a></li>
        <li className={`ms-3 ${styles.grow}`}><a className="text-muted" href="https://www.facebook.com/amc/"><i className="fa fa-facebook"></i></a></li>
      </ul>
    </footer>
  )
}