import React from 'react';
import './Card.css';
import placeholderImage from '../../assets/gray_box.png';

function Card({ title, description }) {
  return (
    <div className="card">
      <img className="card-image" src={placeholderImage}/>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
    </div>
  );
}

export default Card;