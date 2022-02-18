import "./Timer.css";

const Timer = (props) => {
    return (
        <div className="timer-main">
            <div className='timer-types'>
                <div className="timer-types__buttons">
                    <button className="button-type">Pomodoro</button>
                    <button className="button-type">Short Break</button>
                    <button className="button-type">Long Break</button>
                </div>
                <div className="timer">25:00</div>
            </div>
            <div className="timer-start">
                <button className='start'>
                    START
                </button>
            </div>
        </div>
    );
};

export default Timer;