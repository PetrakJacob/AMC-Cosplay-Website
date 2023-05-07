import styles from "./FormBack.module.css";
import video from "../../assets/videos/Cosplay.mp4";
import ApplicantForm from './ApplicantForm.js';
import Affirmation from "./Affirmation";
import {useState} from 'react';


export default function FormBack() {
  
  let [input, setInput] = useState(1);
  let [data, setData] = useState([{number: 1, firstName: "", lastName: "" }]);

  const changeData = (e) => {
    setInput(e.target.value);
    let newData = [];

    if (data.length >= e.target.value) {
      for (let i = 0; i < e.target.value; i++) {
        newData.push(data[i])
      }
    } else {
      newData = data
      let lastNum; 
      data.length ? lastNum = data.length : lastNum = 0;
      for (let i = 0; i < e.target.value - data.length ; i++) {
        newData =[...newData, {number: lastNum + i + 1, firstName: "", lastName: ""}]
      }
    }
    setData(newData)
  };

  const sendForm = () => {
    document.querySelectorAll("[class*='backContainer']")[0].style.display = "flex";
    fetch("/attendForm", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Event: `${document.querySelectorAll("[class*='FullWidth']")[0].value}`,
        cosplayers: [...data]
      })
    }).then(res => {return res.json()})
      .then(data => {
        if (data.sent) {
          document.querySelectorAll("[class*='text']")[0].innerHTML = "Nice! It sent, you can get back to your day now";
          document.querySelectorAll("[class*='homeBtn']")[0].style.display = "inline";
        }
      })
  }

  return(
    <>
      <Affirmation />
      <video controls autoPlay muted loop src={video} className={styles.backVid}></video>
      {/* <form> */}
        <div className={styles.formCon}>
          <h1 className={styles.title} id="event">Event</h1>
          <select className={`form-select ${styles.FullWidth}`} aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">Better Call Saul</option>
            <option value="2">Breaking Bad</option>
            <option value="3">Dark Winds</option>
            <option value="4">interview With the Vampire</option>
            <option value="5">Mayfair Witches</option>
            <option value="6">Walking Dead</option>
          </select>
          <h1 className={styles.title} id="info">Ticket Type Info</h1>
          <span className={styles.box}>
            <h2 style={{ fontSize: "20px" }}><strong>Supa-Fan Weekend Pass</strong></h2>
            <p style={{ marginTop: "40px"}}>
              <strong>COST: $65</strong><br /><br />
              10AM to 6PM Saturday, 5 November<br />
              10AM to 6PM Sunday, 6 November<br />

              Includes access to:<br />
              Main Exhibitor Floor & The Alley~<br />
              All Q&A panels and seminars~<br />
              Photo and signature opportunities with all our Supa-Stars*<br />

              (*Photo and autograph fees apply for certain Supa-Stars)<br />

              ^additional Ticket Provider fees may apply<br />

              ~within venue and room capacity allowance<br />
            </p>
          </span>
          <span className={styles.box}>
            <h2 style={{ fontSize: "20px" }}><strong>Day Pass - Saturday or Sunday</strong></h2>
            <p style={{ marginTop: "40px" }}>
              <strong>COST: $35</strong><br /><br />
              10AM to 6PM Saturday, 5 November<br />
              10AM to 6PM Saturday, 5 November<br />
              or<br />
              10AM to 6PM Sunday, 6 November<br />

              Includes access to:<br />
              Main Exhibitor Floor & The Alley~<br />
              All Q&A panels and seminars~<br />
              Photo and signature opportunities with all our Supa-Stars*<br />

              (*Photo and autograph fees apply for certain Supa-Stars)<br />

              ^additional Ticket Provider fees may apply<br />

              ~within venue and room capacity allowance<br />
            </p>
          </span>
          <h1 className={styles.title} id="people going">How many People are going</h1>
          <input className={`form-control ${styles.FullWidth}`} type="number" 
          placeholder="number of people attending" aria-label="default input example" 
          value={input} onChange={(e) => changeData(e)}/>
          {data.map(obj => {return <ApplicantForm number={obj.number} firstName={obj.firstName} lastName={obj.lastName}/>} )}
          <button className={styles.btn} onClick={sendForm}>Purchase</button>
        </div>
      {/* </form> */}
    </>
  )
}