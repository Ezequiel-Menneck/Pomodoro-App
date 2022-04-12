const HeaderButton = ({ src, text }) => {
    return (
        <button className="button-header">
            <img src={src} alt={text} />
            <p> {text}</p>
        </button>
    );
};

export default HeaderButton;
