import { useSwipeable } from "react-swipeable";
import "./App.css";
import { useState } from "react";
import { MovingX } from "./Components/MovingX";
import { MovingXY } from "./Components/MovingXY";

const cards = [{ id: 0 }, { id: 1 }, { id: 2 }];

const Carousel = ({ products }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handler = useSwipeable({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
  });
  const handleSwipe = (direction) => {
    switch (direction) {
      case "left":
        return setActiveIndex((prev) =>
          Math.min(prev + 1, products.length - 1)
        );
      case "right":
        return setActiveIndex((prev) => Math.max(prev - 1, 0));
      default:
        return null;
    }
  };

  return (
    <div
      {...handler}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "30px",
        backgroundColor: "grey",
        width: "700px",
        height: "400px",
        flexWrap: "nowrap",
        overflowX: "hidden",
      }}
    >
      {products.map((card) => {
        return (
          <div
            key={card.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "30px",
              backgroundColor: card.id === activeIndex ? "green" : "red",
              minWidth: "250px",
              height: "200px",
            }}
          >
            {card.id}
          </div>
        );
      })}
    </div>
  );
};

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        rowGap: "20px",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Carousel products={cards}></Carousel>
      <MovingX />
      <MovingXY />
    </div>
  );
}

export default App;
