import React from "react";
import { useState } from "react";

const cards = [{ id: 0 }, { id: 1 }, { id: 2 }];

export const MovingX = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [endX, setEndX] = useState(0);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setStartX(event.touches[0].clientX);
    setEndX(offsetX);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const newOffsetX = endX + event.touches[0].clientX - startX;
      setOffsetX(newOffsetX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
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
        height: "400px",
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
            }}
          >
            {card.id}
          </div>
        );
      })}
    </div>
  );
};
