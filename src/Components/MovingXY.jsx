import React from "react";
import { useState } from "react";

const cards = [{ id: 0 }, { id: 1 }, { id: 2 }];

export const MovingXY = () => {
  const [products, setProducts] = useState(cards);
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const [startY, setStartY] = useState(0);
  const [startX, setStartX] = useState(0);
  const [startOffsetY, setStartOffsetY] = useState(0);
  const [startOffsetX, setStartOffsetX] = useState(0);

  const handleTouchStart = (event, id) => {
    setActiveCardIndex(id);
    setStartY(event.touches[0].clientY);
    setStartX(event.touches[0].clientX);
    setStartOffsetY(products[id].offsetY || 0);
    setStartOffsetX(products[id].offsetX || 0);
  };
  const handleTouchMove = (event) => {
    if (activeCardIndex !== null) {
      const newOffsetY = startOffsetY + event.touches[0].clientY - startY;
      const newOffsetX = startOffsetX + event.touches[0].clientX - startX;

      setProducts((prevCards) =>
        prevCards.map((card, index) =>
          index === activeCardIndex
            ? { ...card, offsetY: newOffsetY, offsetX: newOffsetX }
            : card
        )
      );
    }
  };

  const handleTouchEnd = () => {
    setActiveCardIndex(null);
    setProducts((prevCards) =>
      prevCards.map((card, index) =>
        index === activeCardIndex ? { ...card, offsetY: 0, offsetX: 0 } : card
      )
    );
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
              backgroundColor: "red",
              minWidth: "180px",
              height: "100px",
              transform: `translate(${card.offsetX || 0}px, ${
                card.offsetY || 0
              }px)`,
              zIndex: activeCardIndex === null ? 1 : "auto",
              transitionProperty: activeCardIndex === null ? "transform" : "",
              transitionTimingFunction:
                activeCardIndex === null ? "ease-in-out" : "",
              transitionDuration: activeCardIndex === null ? "1s" : "",
            }}
            onTouchStart={(event) => handleTouchStart(event, card.id)}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {card.id}
          </div>
        );
      })}
    </div>
  );
};
