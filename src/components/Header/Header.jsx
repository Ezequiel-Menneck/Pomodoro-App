import "./Header.css";
import HeaderButton from "../HeaderButton/HeaderButton";

const Header = () => {
    return (
        <div className="header">
            <div className="pomodoro">
                <a href="">
                    <img src="src\medias\icon-white.png" alt="" /> Pomodoro
                </a>
            </div>
            <div className="pomodoro-buttons">
                <HeaderButton 
                    src="src\medias\graph-white.png" 
                    text="Report"
                />
                <HeaderButton
                    src="src\medias\config-white.png"
                    text="Settings"
                />
                <HeaderButton 
                    src="src\medias\user-white.png" 
                    text="Login"
                />
            </div>
        </div>
    );
};

export default Header;
