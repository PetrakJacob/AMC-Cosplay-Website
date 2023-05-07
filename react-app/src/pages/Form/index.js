import NavBar from "../../components/NavBar/NavBar.js";
import Footer from "../../components/Footer/Footer.js"
import FormBack from "../../components/FormBack/FormBack.js"
import React from 'react';
import ReactDOM from 'react-dom/client';

export default function Form(props) {
  return(
    <>
      <NavBar names={["event", "info", "people going"]} />
      <FormBack/>
      <Footer/>
    </>
  )
}