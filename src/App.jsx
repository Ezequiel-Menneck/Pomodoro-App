import "./App.css";

import Header from "./components/Header/Header";
import Timer from "./components/Timer/Timer";
import Divisor from "./components/Divisor/Divisor";
import AddTask from "./components/AddTask/AddTask";
import Task from "./components/Task/Task";

const App = () => {
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
            <Task text="Olá" />
            <AddTask />
        </div>
    );
};

export default App;
