import React, { useEffect, useState } from "react";
import Card from "./card";

function SecondCounter() {
  const [counter, setCounter] = useState(0);
  const [test, setTest] = useState(<Card displaySec={"0"} />)
  let secondsArray = []


  useEffect (() => {setInterval(() => {
    setCounter(prevCount => { secondsArray = (prevCount + 1).toString().split(''); return prevCount + 1;});
    // secondsArray = counter.toString().split('');      <------ WHY DID THIS NOT WORK? 'counter' SHOWS ZERO!
    setTest(secondsArray.map((item) => {return (<Card displaySec={item} />)}))
    console.log(test)
    console.log(secondsArray)
  }, 1000);}, []);

 

  return (
    <div className="bg-dark text-light d-flex justify-content-center">
      <div className="card bg-dark border-secondary numberCard m-3 pt-5 fs-1"><i class="fa-solid fa-clock"></i></div>

      {/* <h2>Counting: {counter}</h2> */}
      {test}
     
    </div>
  );
}

export default SecondCounter