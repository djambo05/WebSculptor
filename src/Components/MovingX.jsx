import React from "react";
import { useState } from "react";

const cards = [{ id: 0 }, { id: 1 }, { id: 2 }];

export const MovingX = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.touches[0].clientX);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const newOffsetX = event.touches[0].clientX - startX;
      setOffsetX(newOffsetX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setOffsetX(0);
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "30px",
        backgroundColor: "grey",
        width: "700px",
        height: "300px",
        flexWrap: "nowrap",
        overflowX: "hidden",
      }}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseMove}
      onTouchEnd={handleMouseUp}
    >
      {cards.map((card) => {
        return (
          <div
            key={card.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "30px",
              backgroundColor: "red",
              minWidth: "180px",
              height: "100px",
              transform: `translateX(${offsetX}px)`,
              transitionProperty: !isDragging ? "transform" : "",
              transitionTimingFunction: !isDragging ? "ease-in-out" : "",
              transitionDuration: !isDragging ? "1s" : "",
            }}
          >
            {card.id}
          </div>
        );
      })}
    </div>
  );
};
