import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import Abouts from './components/Abouts';
import React, { useState } from 'react';
import Alerts from './components/Alerts';



function App() {
  let [mode , setMode] = useState("light"); // tell use about mode
  let [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type 
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === "dark") {
      showAlert("Light mode is on","warning");
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      let myBox = document.getElementById("MyBox");
      if (myBox) {
        myBox.style.backgroundColor = "white";
        myBox.style.color = "black";
      }
    } else {
      showAlert("Light mode is on","warning");
      setMode("dark");
      document.body.style.backgroundColor = "#212529dd";
      document.body.style.color = "white";
      let myBox = document.getElementById("MyBox");
      if (myBox) {
        myBox.style.backgroundColor = "#212529dd";
        myBox.style.color = "white";
      }
    }
  };
  

  return (
    <>
    <Navbar title="Text-Editor" about="About" mode={mode} toggleMode = {toggleMode}/>
    <Alerts alert={alert}/>
    {/* <Abouts/> */}
    <div className="container">
      <TextForm head="Enter your text below to analyse."/>
    </div>
    </>
  );
}

export default App;
