// Card.js
import React, { useState } from 'react';
import './deprev_card.css';

const Gods_reveal = ({ cardClass, cloneClass }) => {
  const [isHidden, setIsHidden] = useState(false);

  const handleCardClick = () => {
    setIsHidden(true);
    // Add any additional logic you need here
  };

  return (
    <section className={cardClass + (isHidden ? ' card--hidden' : '')} onClick={handleCardClick}>
      <article></article>
      <aside></aside>
    </section>
  );
};

export default Gods_reveal;
