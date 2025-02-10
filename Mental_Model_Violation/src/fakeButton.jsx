import React, { useState } from "react";

function FakeButton() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
    };

    return (
        <div>
            {clicked ? (
                <div className="btn" onClick={handleClick}>
                <h1 className="bb">Click Here To Proceed</h1>
            </div>
            ) : (
                <div className="btn" onClick={handleClick}>
                    <h1 className="bb">Click Here To Proceed</h1>
                </div>
            )}
        </div>
    );
}

export default FakeButton;
