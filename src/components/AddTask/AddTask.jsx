import "./AddTask.css";
import { useState } from "react";

const AddTask = ({ changeTextOfTask }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [textTask, setTextTask] = useState("");

    return (
        <>
            {isVisible ? (
                <button
                    className="addTask-main"
                    onClick={() => setIsVisible(false)}
                >
                    <img
                        src="src\medias\plus-circle-white.png"
                        alt="Add"
                        className="addTask-img"
                    />
                    <span className="addTask-text">Add Task</span>
                </button>
            ) : (
                <>
                    <div className="addTask-form">
                        <div className="addTask-work">
                            <input
                                type="text"
                                placeholder="What are you working on?"
                                className="addTask-input"
                                value={textTask}
                                onChange={(e) => setTextTask(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="addTask-buttons">
                        <button
                            className="addTask-button-delete"
                            onClick={() => {
                                setIsVisible(true);
                                setTextTask("");
                            }}
                        >
                            Delete
                        </button>
                        <button
                            className="addTask-button-cancel"
                            onClick={() => {
                                setIsVisible(true);
                                setTextTask("");
                            }}
                        >
                            Cancel
                        </button>
                        <button
                            className="addTask-button-save"
                            onClick={() => changeTextOfTask(textTask)}
                        >
                            Save
                        </button>
                    </div>
                </>
            )}
        </>
    );
};

export default AddTask;
