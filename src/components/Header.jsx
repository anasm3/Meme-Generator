// import React from "react";

const Header = () => {
    return (
        <header className="header">
            <img 
                src="./src/assets/troll-face.png" 
                className="header--image"
                alt="Troll Face"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    );
}

export default Header;