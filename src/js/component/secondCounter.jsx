import React, { useEffect, useState } from "react";
import Card from "./card";

function SecondCounter() {
  const [counter, setCounter] = useState(0);
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
  let secondsArray = ["000000"]

  const leadingZeros = (numberString) => {
    let newNumberString = numberString
    while (newNumberString.length < 6) {
      newNumberString = "0" + newNumberString
    }
    return newNumberString
  }


  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCount => { secondsArray = leadingZeros((prevCount + 1).toString()).split(''); return prevCount + 1; });
      // secondsArray = counter.toString().split('');      <------ WHY DID THIS NOT WORK? 'counter' SHOWS ZERO!
      setTest(secondsArray.map((item) => { return (<Card displaySec={item} />) }))
    }, 1000); return () => {
      return (clearInterval(interval))}; // important to clearInterval to stop the interval once component is unmounted
  }, []);



  return (
    <div className="bg-dark text-light d-flex justify-content-center">
      <div className="card bg-dark border-secondary numberCard m-3 pt-5 fs-1"><i class="fa-regular fa-clock"></i></div>

      {test}

    </div>
  );
}

export default SecondCounter