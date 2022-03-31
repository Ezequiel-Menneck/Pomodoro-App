import "./Task.css";

const Task = ({ cebola }) => {
    return (
        <>
            {cebola.map((c) => (
                <div className="tasks-main">
                    <div>
                        <p className="tasks-text">{c}</p>
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