import { useEffect, useState } from "react";
import "./Timer.css";

const Timer = (props) => {
    const [min, setMin] = useState('25');
    const [sec, setSec] = useState('00');
    

    const start = () => {
        setSec(59)
        setInterval(() => {       
            setSec(sec => sec - 1) 
        }, 1000);
    }
    
    useEffect(() => {
        if(sec == -1) {
            setMin(min => min - 1)
        }
        if(sec == -1) {
            setSec(59)
        }
    }, [sec])

    return (
        <div className="timer-main">
            <div className="timer-types">
                <div className="timer-types__buttons">
                    <button className="button-type">Pomodoro</button>
                    <button className="button-type">Short Break</button>
                    <button className="button-type">Long Break</button>
                </div>
                <div className="timer">{min}:{sec}</div>
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