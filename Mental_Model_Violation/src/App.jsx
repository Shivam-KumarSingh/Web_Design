import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import FakeButton from "./fakeButton";
import MovingButton from "./movingBtn";
function App() {
  const [reverseScroll] = useState(true);

  useEffect(() => {

    const handleScroll = (event) => {
      window.scrollBy(0, -event.deltaY); 
      event.preventDefault();
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => window.removeEventListener("wheel", handleScroll);
  }, [reverseScroll]);

  return (
    <div className="app-container" style={{ height: "200vh", padding: "20px" }}>
      <header className="app-header">
        <h1>Understanding Human-Computer Interaction (HCI)</h1>
        <p>
          Learn about HCI and its importance in design. Watch this video: 
          <a target="_blank" rel="noopener noreferrer">
            Click here
          </a>
        </p>
       
        <FakeButton />
        <Login/>

        <MovingButton />
      </header>
      
    </div>
  );
}

export default App;
