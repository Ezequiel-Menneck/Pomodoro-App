import { useEffect, useState } from "react";
import "./Timer.css";

const COUNTDOWN_TIME_SECONDS = 25 * 60; // 25 minutos em segundos

const Timer = (props) => {
    const [secondsAmount, setSecondsAmount] = useState(COUNTDOWN_TIME_SECONDS);
    const [intervalId, setIntervalId] = useState(0);
    const [running, setRunning] = useState(0)

    const minutes = Math.floor(secondsAmount / 60);
    const seconds = secondsAmount % 60;

    const start = () => {
        setRunning(1)
        const newIntervalId = setInterval(() => {
            setSecondsAmount((sec) => sec - 1);
        }, 1000);
        setIntervalId(newIntervalId);
    };
    
    const pause = () => {
        setRunning(0)
        clearInterval(intervalId)
    }
    
    useEffect(() => {
        if (minutes === 0 && seconds === 0) {
            clearInterval(intervalId);
            setSecondsAmount(COUNTDOWN_TIME_SECONDS)
            setRunning(0)
        }
    }, [secondsAmount]);

    return (
        <div className="timer-main">
            <div className="timer-types">
                <div className="timer-types__buttons">
                    <button className="button-type">Pomodoro</button>
                    <button className="button-type">Short Break</button>
                    <button className="button-type">Long Break</button>
                </div>
                <div className="timer">
                    <span>{String(minutes).padStart(2, "0")}</span>
                    <span>:</span>
                    <span>{String(seconds).padStart(2, "0")}</span>
                </div>
            </div>
            <div className="timer-start">
                <button className="start" onClick={() => running ? pause() : start()}>
                    {running ? "PAUSE" : "STARaT"}
                </button>
            </div>
        </div>
    );
};

export default Timer;
