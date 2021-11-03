import React, { useState } from "react";
import "../getTime.css";
import "../../App";

export default function GetTime () {
    const [time,setTime] = useState("Time");

    const getTime = () =>{
        let newTime = new Date().toLocaleTimeString();

        setTime(newTime);
    }

    return (
        <div className="container">
            <h1>{time}</h1>
            <button onClick={getTime}>Get Time</button>
        </div>
    );
}