// src/components/small-card/index.jsx
import React from 'react';
import { Card } from './styles';

const SmallCard = ({ title, value, customContent, customClassName }) => {
  return (
    <Card className={customClassName}>
      {title && <h3>{title}</h3>}
      {value && <p>{value}</p>}
      {customContent}
    </Card>
  );
};

export default SmallCard;
