import React, { useEffect, useState } from "react";
import Card from "./card";

function SecondCounter() {
  const [counter, setCounter] = useState(0);
  const [pause, setPause] = useState(true);
  const [alertX, setAlertX] = useState(false);
  const [alertInput, setAlertInput] = useState("10");
  const [test, setTest] = useState(
    <React.Fragment>
      <Card displaySec={"0"} />
      <Card displaySec={"0"} />
      <Card displaySec={"0"} />
      <Card displaySec={"0"} />
      <Card displaySec={"0"} />
      <Card displaySec={"0"} />
    </React.Fragment>
  )
  let secondsArray = []

  const leadingZeros = (numberString) => {
    let newNumberString = numberString
    while (newNumberString.length < 6) {
      newNumberString = "0" + newNumberString
    }
    return newNumberString
  }


  useEffect(() => {
    if (pause) {
      const interval = setInterval(() => {
        setCounter(prevCount => { secondsArray = leadingZeros((prevCount + 1).toString()).split(''); return prevCount + 1; });
        // secondsArray = counter.toString().split('');      <------ WHY DID THIS NOT WORK? 'counter' SHOWS ZERO!
        setTest(secondsArray.map((item) => { return (<Card displaySec={item} />) }))
      }, 1000); return () => {
        return (clearInterval(interval))}; // important to clearInterval to stop the interval once component is unmounted
    }

  }, [pause]);

  useEffect(() => {
    
    if (alertX) {
      const intervalAlert = setInterval(() => {
        console.log("Alert check running...");
        console.log(counter + " comapre with " + alertInput); // 'counter' doesnt show the correct number but running a 'setCounter' gives access.
        setCounter((prev) => {
          console.log(prev);
          if(prev === parseInt(alertInput)) {alert("Number reached!")}
          return prev
        })
         }
         , 1000); return () => {
        return (clearInterval(intervalAlert))};
    }


    }, [alertX]);


  return (
    <React.Fragment>
      <div className="bg-dark text-light d-flex justify-content-center">
        <div className="card bg-dark border-secondary numberCard m-3 pt-5 fs-1"><i className="fa-regular fa-clock"></i></div>

        {test}
      </div>
      <div className="bg-dark text-light d-flex justify-content-center">
        <button className={'btn btn-' + (pause ? "primary" : "success") +  ' border-secondary m-2'} onClick={ () => {setPause(prev => !prev)}}>{pause ? "Pause" : "Resume"} Timer</button>
        <button className="btn btn-danger border-secondary m-2 " onClick={ () => {setCounter(-1)}}>Reset Timer</button>
      </div>
      <div>
        <input onChange={e => setAlertInput(e.target.value)} type="number" min="1" value={alertInput} className="m-1" disabled={alertX ? true : false} />
        <button  className="btn btn-primary" onClick={ () => {setAlertX((prev) => !prev) }} >{alertX ? "Cancel" : "Set"} Alert</button>
      </div>
    </React.Fragment>
  );
}

export default SecondCounter