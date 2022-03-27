import "./Task.css"

const Task = props => {
    return (
        <div className="tasks-main">
            <p className="tasks-text">{props.text}</p>
            <button className="tasks-button">
                <img src="src\medias\vertical-ellipsis.png" alt="" />
            </button>
        </div>
    )
}

export default Task