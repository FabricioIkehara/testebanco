import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardSubtitle, PurchaseRow, Establishment, PurchaseDetails, PurchaseValue, LoadMoreButton } from './styles';

const RightCard = ({ purchases }) => {
  // mais novas primeiro!!
  const sortedPurchases = purchases.sort((a, b) => new Date(b.date) - new Date(a.date));

  // por data
  const groupedPurchases = sortedPurchases.reduce((acc, purchase) => {
    if (!acc[purchase.date]) {
      acc[purchase.date] = [];
    }
    acc[purchase.date].push(purchase);
    return acc;
  }, {});

  return (
    <Card>
      <CardTitle>Últimas compras</CardTitle>
      {Object.keys(groupedPurchases).map(date => (
        <div key={date}>
          <CardSubtitle>{date}</CardSubtitle>
          {groupedPurchases[date].map((purchase, index) => (
            <PurchaseRow key={index}>
              <div>
                <Establishment>{purchase.establishment}</Establishment>
                <PurchaseDetails>Compra no crédito</PurchaseDetails>
              </div>
              <PurchaseValue>{purchase.value}</PurchaseValue>
            </PurchaseRow>
          ))}
        </div>
      ))}
      <LoadMoreButton onClick={() => alert('Carregar mais compras')}>VER EXTRATO</LoadMoreButton>
    </Card>
  );
};

RightCard.propTypes = {
  purchases: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      establishment: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default RightCard;
