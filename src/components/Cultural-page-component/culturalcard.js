import React from "react";

const CulturalCard = ({ title, imageUrl, description }) => {
  const handleTouchStart = (event) => {
    event.currentTarget.classList.toggle("hover");
  };

  return (
    <div className="scol" onTouchStart={handleTouchStart}>
      <div className="scontainer">
        <div className="front" style={{ backgroundImage: `url(${imageUrl})` }}>
          <div className="inner">
            <p>{title}</p>
          </div>
        </div>
        <div className="back">
          <div className="inner">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CulturalCard;
