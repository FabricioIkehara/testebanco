// src/components/right-card/styles.js
import styled from 'styled-components';

export const Card = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 533px;
  margin-top: 15px;
`;

export const CardTitle = styled.h3`
  color: #484848;
  font-family: Lato;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  margin-bottom: 8px;
`;

export const CardSubtitle = styled.h4`
  font-family: Lato;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.8px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #1BC681;
  margin-bottom: 8px;
`;

export const PurchaseRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: #ddd;
  }
`;

export const Establishment = styled.div`
  position: relative;
  z-index: 1;
  color: #484848;
  font-family: Lato;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.8px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

export const PurchaseDetails = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: #666;
`;

export const PurchaseValue = styled.div`
  font-size: 14px;
  font-weight: 600;
  position: relative;
  z-index: 1;
  color: #1BC681;
  font-family: Lato;
  line-height: 16.8px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
`;

export const LoadMoreButton = styled.button`
  display: block;
  margin: 20px auto; /* Centraliza o botão */
  padding: 10px 20px;
  background-color: #1BC681;
  color: #FFFFFF;
  border: none;
  cursor: pointer;
  font-size: 16px;
  width: 169px;
  height: 38px;
  padding: 8px 24px 8px 24px;
  gap: 10px;
  border-radius: 6px;




  &:hover {
    background-color: #17a674;
  }
`;


