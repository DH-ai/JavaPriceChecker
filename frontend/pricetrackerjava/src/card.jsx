import React from "react";
import './Card.css'; // We will add styling later

const Card = ({ title, price, link }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>Price: ${price}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View on {title}</a>
    </div>
  );
};

export default Card;
