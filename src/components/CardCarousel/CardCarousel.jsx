import React from 'react';
import Card from '../Card/Card';
import './CardCarousel.css';

function CardCarousel({ heading, cards }) {
  return (
    <div className="card-carousel-section">
      <h1 className="section-heading">{heading}</h1>
      <div className="card-carousel">
        {cards.map((card, index) => (
          <Card 
            key={index} 
            title={card.title} 
            description={card.description} 
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
}

export default CardCarousel;