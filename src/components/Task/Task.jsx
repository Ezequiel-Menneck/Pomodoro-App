import "./Task.css";

const Task = ({ text, editTextOfTask }) => {
    const toggleClass = (e) => {
        e.target.classList.toggle("tasks-box-img__selected");
        console.log("EBIEBO");
    };

    return (
        <>
            {text.map((t, i) => (
                <div className="tasks-main" key={i}>
                    <div className="tasks-display">
                        <img
                            src="src\medias\tick.png"
                            alt=""
                            className="tasks-box-img"
                            onClick={(e) => toggleClass(e)}
                        />
                        <p className="tasks-text">{t}</p>
                    </div>
                    <button
                        className="tasks-button"
                        onClick={() => editTextOfTask(t, i)}
                    >
                        <img
                            src="src\medias\vertical-ellipsis.png"
                            alt=""
                            style={{ marginLeft: "3px" }}
                        />
                    </button>
                </div>
            ))}
        </>
    );
};

export default Task;