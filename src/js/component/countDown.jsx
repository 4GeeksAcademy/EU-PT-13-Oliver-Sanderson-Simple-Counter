import React, { useState } from "react";

function CountDown () {

    const [countNumber, setCountNumber] = useState(10)

    return (
        <div className="bg-dark text-light d-flex justify-content-center">
            <div className="card bg-dark border-secondary m-3 p-3">
                <h2>Countdown</h2>
                <input id="countdownInput" className="m-1" type="number" min="1" max="9999" onChange={e => setCountNumber(e.target.value)} value={countNumber} ></input>
                <button className="btn btn-primary m-2" 
                onClick={
                    (e) => {
                        console.log(e)
                        e.target.disabled = true
                        document.getElementById("countdownInput").disabled = true

                        let countdownInterval = setInterval(
                            () => {
                                setCountNumber(pre =>{if ((pre-1) <= 0) {clearInterval(countdownInterval); e.target.disabled = false; document.getElementById("countdownInput").disabled = false}; return pre - 1});
                            }, 1000
                        )
                    }
                }
                >Start</button>
            </div>
            <div className="card bg-dark border-secondary numberCard m-3 pt-5 fs-1">
                {countNumber}
            </div>
        </div>
        )
}

export default CountDown