import { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const logBlock = useRef(null);
  useEffect(() => {
    logBlock.current.addEventListener("touchstart", handleTouchStart, false);
    logBlock.current.addEventListener("touchmove", handleTouchMove, false);
  }, []);

  function handleClick() {
    console.log(logBlock.current);
    logBlock.current.style.backgroundColor = "black";
  }
  let x1 = null;
  let y1 = null;

  function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
    y1 = firstTouch.clientY;
  }

  function handleTouchMove(event) {
    if (!x1 || !y1) return false;
    let x2 = event.touches[0].clientX;
    let y2 = event.touches[0].clientY;
    let xDiff = x2 - x1;
    let yDiff = y2 - y1;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      // r - l
      if (xDiff > 0) console.log("right");
      else console.log("left");
    } else {
      // t - b
      if (yDiff > 0) console.log("down");
      else console.log("top");
    }
    console.log(logBlock);
    x1 = null;
    y1 = null;
  }

  return (
    <div className="App">
      <div
        className="logblock"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "grey",
          width: 500,
          height: 400,
        }}
        ref={logBlock}
      >
        <button
          style={{ backgroundColor: "white", width: 100, height: 100 }}
          onClick={handleClick}
        ></button>
      </div>
    </div>
  );
}

export default App;
