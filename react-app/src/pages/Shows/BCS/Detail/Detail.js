import styles from './Detail.module.css'
import map from '../../../../assets/images/map.png'
import clock from '../../../../assets/images/clock.jpg';
import costume from '../../../../assets/images/costume.svg'



export default function Detail() {
  return (
    <section className={styles.container} id="details">
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className={`${styles.cardBack}`}>
              <img src={map} alt="map" className={styles.cardImg} />
              <h3>Location</h3>
              <p>The Better Call Saul Event will be held in Brisbane City (11 Dixon Road,Brisbane, 4855, Australia).</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className={`${styles.cardBack}`}>
              <img src={clock} alt="map" className={styles.cardImg} />
              <h3>Time</h3>
              <p>The event is this weekend (December 2nd - December 4th). Be there between 9am to 9pm.</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className={`${styles.cardBack}`}>
              <img src={costume} alt="map" className={styles.cardImg} />
              <h3>Costumes</h3>
              <p>The Event will have the following costumes: Saul Goodman, Walter White, Kim Wexler, Gus Fring, Lalo Salamanca, Mike Ehrmantraut and Chuck Mcgill.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  )
}