import React from 'react';
import Card from '../card/Card';
import './CardContainer.css';

const CardContainer = ({ data }) => {
  return (
    <div className="card-container">
      {data.map((card) => (
        <Card 
        key={card.id}
        title={card.title}
        description={card.description}
        imageUrl={card.url} 
        />
      ))}
    </div>
  );
};

export default CardContainer;