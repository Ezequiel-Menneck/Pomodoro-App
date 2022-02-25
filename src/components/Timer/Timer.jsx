import { useEffect, useState } from "react";
import "./Timer.css";

const Timer = (props) => {
    const [min, setMin] = useState("25");
    const [sec, setSec] = useState("00");
    const [intervalId, setIntervalId] = useState(0)
    
    const start = () => {
        setMin(24);
        setSec(59);
        const newIntervalId = setInterval(() => {
            setSec(sec < 10 ? (sec) => sec - 1 : sec + 1);        
        }, 1000)
        setIntervalId(newIntervalId)
    };

    useEffect(() => {
        
    }, [sec])

    useEffect(() => {
        if (min == 0 && sec == 0) {
            clearInterval(intervalId)
            setSec('00')
            setMin('25')
        }
        if (sec == -1) {
            setMin((min) => min - 1);
        }
        if (sec == -1) {
            setSec(59);
        }
    }, [sec]);

    return (
        <div className="timer-main">
            <div className="timer-types">
                <div className="timer-types__buttons">
                    <button className="button-type">Pomodoro</button>
                    <button className="button-type">Short Break</button>
                    <button className="button-type">Long Break</button>
                </div>
                <div className="timer">
                    {min}:{sec}
                </div>
            </div>
            <div className="timer-start">
                <button className="start" onClick={() => start()}>
                    START
                </button>
            </div>
        </div>
    );
};

export default Timer;
