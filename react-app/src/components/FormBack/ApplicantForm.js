import styles from './ApplicantForm.module.css'

export default function ApplicantForm(props) {
  return (
    <>
      <h4 className={styles.title}>member {props.number}</h4>
      <div className={`input-group ${styles.fullWidth}`}>
        <span className="input-group-text">First and last name</span>
        <input type="text" aria-label="First name" className="form-control" defaultValue={props.firstName ? props.firstName : ""}/>
        <input type="text" aria-label="Last name" className="form-control" defaultValue={props.lastName ? props.lastName : ""}/>
      </div>
      <select className={`form-select ${styles.fullWidth}`} aria-label="Default select example">
        <option selected>ticket</option>
        <option value="1">Supa-Fan Weekend Pass</option>
        <option value="2">Day Pass - Saturday or Sunday</option>
      </select>
      <select className={`form-select ${styles.fullWidth}`} aria-label="Default select example">
        <option selected>Costume</option>
        <option value="1">Saul Goodman</option>
        <option value="2">Kim Wexler</option>
        <option value="3">Walter Harvor White</option>
        <option value="4">Jesse Pinkman</option>
        <option value="5">Joe Leaphorn</option>
        <option value="6">Jim Chee</option>
        <option value="7">Lestat de Lioncourt</option>
        <option value="8">Daniel Molloy</option>
        <option value="9">Cortland Mayfair</option>
        <option value="10">Dr. Rowan Fielding</option>
        <option value="11">Rick Grimes</option>
        <option value="12">Daryl Dixon</option>
      </select>
    </>
  )
}