import "./App.css";

import Header from "./components/Header/Header";
import Timer from "./components/Timer/Timer";
import Divisor from "./components/Divisor/Divisor";
import AddTask from "./components/AddTask/AddTask";
import Task from "./components/Task/Task";
import { useState } from "react";

const App = () => {
    const [textOfTask, setTextOfTask] = useState([]);
    const [textTask, setTextTask] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    const [taskEdit, setTaskEdit] = useState();

    console.log(taskEdit)

    const setTask = (text) => {
        setTextOfTask([...textOfTask, text]);
        setIsEdit(false);
    };

    const editTask = (text) => {
        const newTextOfTaks = [...textOfTask]
        newTextOfTaks[taskEdit] = text
        setTextOfTask(newTextOfTaks);
        setIsEdit(false);
    };
    
    const editTextOfTask = (text, i) => {
        setTextTask(text);
        setIsEdit(true);
        setTaskEdit(i)
    };

    const deleteTextOfText = () => {
        const newTextAfterDelete = [...textOfTask]
        newTextAfterDelete.splice(taskEdit, 1)
        setTextOfTask(newTextAfterDelete);
        setIsEdit(false);
    }

    return (
        <div className="main">
            <Header />
            <Divisor
                width="43rem"
                border="0.3px solid rgba(0, 0, 0, 0.1)"
                marginBottom="1rem"
            />
            <Timer />
            <span className="um">#1</span>
            <span className="focus">Time to focus!</span>
            <div className="task-main">
                <span className="span-task">Tasks</span>
                <button className="button-task">
                    <img
                        className="img-task"
                        src="src\medias\threedots-white.png"
                        alt=""
                    />
                </button>
            </div>
            <Divisor
                width="32rem"
                border="0.3px solid rgba(255, 255, 255, 0.6)"
                marginBottom="1rem"
            />
            <Task text={textOfTask} editTextOfTask={editTextOfTask} />
            <AddTask
                setTask={setTask}
                editTextOfTask={editTextOfTask}
                textTask={textTask}
                setTextTask={setTextTask}
                editTask={editTask}
                deleteTextOfText={deleteTextOfText}
                isEdit={isEdit}
            />
        </div>
    );
};

export default App;
