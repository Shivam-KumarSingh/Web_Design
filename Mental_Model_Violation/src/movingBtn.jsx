import React, { useState } from "react";
// import "./styles.css"; // Add styles here

function MovingButton() {
    const [position, setPosition] = useState({ top: "50%", left: "50%" });

    const moveButton = () => {
        const randomTop = Math.floor(Math.random() * 80) + 10; 
        const randomLeft = Math.floor(Math.random() * 80) + 10;
        setPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
    };

    return (
        <div className="container">
            <button 
                className="moving-btn" 
                onMouseEnter={moveButton} 
                style={{ top: position.top, left: position.left }}
            >
                <h3 className="bb">Fix everything!</h3>
            </button>
        </div>
    );
}

export default MovingButton;
