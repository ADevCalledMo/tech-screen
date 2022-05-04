import React from "react";
import "./Card.css";

export const Card = () => {
  return (
    <div className="app__card-container">
      <div className="app__card">
        <h4>
          <b>Idea goes here:</b>
        </h4>
        <p>I want to visit the moon</p>
      </div>
    </div>
  );
};

export default Card;
