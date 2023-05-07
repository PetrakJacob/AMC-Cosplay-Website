import styles from './Affirmation.module.css';

export default function Affirmation() {
  return(
    <div className={styles.backContainer}>
      <div className={styles.container}>
        <h5 className={styles.text}>Don't get out of this window! <br/> your data is sending to our server</h5>
        <a href='/' className={styles.homeBtn}>Home</a>
      </div>
    </div>
  )
}