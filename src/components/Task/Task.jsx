import "./Task.css";

const Task = ({ text, editTextOfTask }) => {

    const toggleClass = (e) => {
        e.target.classList.toggle("tasks-box-img__selected")
        console.log('EBIEBO')
    }

    return (
        <>
            {text.map((t, i) => (
                <div className="tasks-main" key={i}>
                    <div className="tasks-display">
                        <button className="tasks-box-img" onClick={(e) => toggleClass(e)}>
                            <img
                                src="src\medias\tick.png"
                                alt=""
                                className="tasks-display-img"
                                style={{marginLeft: "3px"}}
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
