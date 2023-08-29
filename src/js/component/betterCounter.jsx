import React, { useEffect, useState } from "react";



function BetterCounter() {

    const [startTime, setStartTime] = useState(new Date())
    const [currentTime, setCurrentTime] = useState(new Date() - startTime)

    useEffect(() => {
        console.log(currentTime)
    })

    return (
        <div>Better</div>
    )
}

export default BetterCounter