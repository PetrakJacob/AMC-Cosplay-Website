import styles from "./progressionBar.module.css";

export default function ProgressionBar (props) {
  return (
    <li className={`nav-item ${styles.progressBar}`}>
      {props.names.map((name) => <a className={styles.sectionTitle} href={"#" + name} key={name}>{name}</a>)}
    </li >
  )
};


