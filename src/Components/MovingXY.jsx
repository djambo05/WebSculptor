import React from "react";
import { useState } from "react";

const cards = [{ id: 0 }, { id: 1 }, { id: 2 }];

export const MovingXY = () => {
  const [products, setProducts] = useState(cards);
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const [startY, setStartY] = useState(0);
  const [startOffsetY, setStartOffsetY] = useState(0);

  const handleTouchStart = (event, id) => {
    setActiveCardIndex(id);
    setStartY(event.touches[0].clientY);
    setStartOffsetY(products[id].offsetY || 0);
  };
  const handleTouchMove = (event) => {
    if (activeCardIndex !== null) {
      const newOffsetY = startOffsetY + event.touches[0].clientY - startY;

      setProducts((prevCards) =>
        prevCards.map((card, index) =>
          index === activeCardIndex ? { ...card, offsetY: newOffsetY } : card
        )
      );
    }
  };

  const handleTouchEnd = () => {
    setActiveCardIndex(null);
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
              transform: `translateY(${card.offsetY || 0}px)`,
              zIndex: activeCardIndex === card.id ? 1 : "auto",
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
