import React from "react";
import "./Card.css";

export const Card = () => {
  return (
    <div className="app__card-container">
      <div className="app__card">
        <div className="app__card-title">
          <h4>
            <b>Idea goes here:</b>
          </h4>
        </div>
        <div className="app__card-body">
          <p>I want to visit the moon</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
