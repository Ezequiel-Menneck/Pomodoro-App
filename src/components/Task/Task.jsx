import "./Task.css";

const Task = ({ text, editTextOfTask }) => {
    return (
        <>
            {text.map((t, i) => (
                <div className="tasks-main" key={i}>
                    <div>
                        <p className="tasks-text">{t}</p>
                    </div>
                    <button className="tasks-button" onClick={() => editTextOfTask(t, i)}>
                        <img src="src\medias\vertical-ellipsis.png" alt="" />
                    </button>
                </div>
            ))}
        </>
    );
};

export default Task;