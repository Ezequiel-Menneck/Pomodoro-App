import "./Header.css";

const Header = () => {
    return (
        <div className="header">
            <div className="pomodoro">
                <a href="">
                    <img src="src\medias\icon-white.png" alt="" /> Pomodoro
                </a>
            </div>
            <div className="pomodoro-buttons">
                <button className="button-header">
                    <img src="src\medias\graph-white.png" alt="Report" /> 
                    <p> Report</p>
                </button>
                <button className="button-header">
                    <img src="src\medias\config-white.png" alt="Settings" /> 
                    <p> Settings</p>
                </button>
                <button className="button-header">
                    <img src="src\medias\user-white.png" alt="Login" />
                    <p> Login</p>
                </button>
            </div>
        </div>
    );
};

export default Header;