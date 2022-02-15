import "./Header.css";

const Header = (props) => {
    return (
        <div className="header">
            <div className="pomodoro">
                <a href="">
                    <img src="src\imgs\icon-white.png" alt="" /> Pomodoro
                </a>
            </div>
            <div className="pomodoro-buttons">
                <button className="button-header">
                    <img src="src\imgs\graph-white.png" alt="Report" /> 
                    <p> Report</p>
                </button>
                <button className="button-header">
                    <img src="src\imgs\config-white.png" alt="Settings" /> 
                    <p> Settings</p>
                </button>
                <button className="button-header">
                    <img src="src\imgs\user-white.png" alt="Login" />
                    <p> Login</p>
                </button>
            </div>
        </div>
    );
};

export default Header;