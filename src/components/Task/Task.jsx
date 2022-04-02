import "./Task.css";

const Task = ({ text, editText }) => {
    return (
        <>
            {text.map((t) => (
                <div className="tasks-main">
                    <div>
                        <p className="tasks-text">{t}</p>
                    </div>
                    <button className="tasks-button" onClick={() => editText(t)}>
                        <img src="src\medias\vertical-ellipsis.png" alt="" />
                    </button>
                </div>
            ))}
        </>
    );
};

export default Task;