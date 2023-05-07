import styles from './Ticket.module.css'
import video from '../../../../assets/videos/amcbackground.mp4'

export default function Ticket() {
  function ticketLinkPress() {
    document.getElementById("ticketLink").click()
  }


  return (
    <section className={styles.container} id="buy ticket">
      <video controls autoPlay muted loop className={styles.backVid}>
        <source src={video} type="video/mp4" />
      </video>
      <button className={styles.ticketBtn} onClick={ticketLinkPress} ><a href="/ticket" id="ticketLink" style={{color:"black"}}>Ticket</a></button>
    </section>
  )
}