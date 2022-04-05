import "./Task.css";
import { useState } from 'react';

const Task = ({ text, editTextOfTask }) => {

    const [isSelected, setIsSelected] = useState(true)
    const [styleSelected, setStyleSelected] = useState("tasks-box-img")

    const toggleClass = () => {
        if(isSelected) {
            setStyleSelected("tasks-box-img__selected")
            setIsSelected(false)
        } else {
            setStyleSelected("tasks-box-img")
            setIsSelected(true)
        }
    }

    return (
        <>
            {text.map((t, i) => (
                <div className="tasks-main" key={i}>
                    <div className="tasks-display">
                        <button className={styleSelected} onClick={() => toggleClass()}>
                            <img
                                src="src\medias\tick.png"
                                alt=""
                                className="tasks-display-img"
                            />
                        </button>
                        <p className="tasks-text">{t}</p>
                    </div>
                    <button
                        className="tasks-button"
                        onClick={() => editTextOfTask(t, i)}
                    >
                        <img src="src\medias\vertical-ellipsis.png" alt="" />
                    </button>
                </div>
            ))}
        </>
    );
};

export default Task;
