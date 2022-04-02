import "./Task.css";

const Task = ({ text }) => {
    return (
        <>
            {text.map((t) => (
                <div className="tasks-main">
                    <div>
                        <p className="tasks-text">{t}</p>
                    </div>
                    <button className="tasks-button">
                        <img src="src\medias\vertical-ellipsis.png" alt="" />
                    </button>
                </div>
            ))}
        </>
    );
};

export default Task;