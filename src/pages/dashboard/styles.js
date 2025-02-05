import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 60px; 
  background-color: #1BC681;
  height: calc(100vh - 60px);
`;

export const Content = styled.div`
  flex-grow: 1;
  padding: 20px;
  gap: 20px;
`;

export const CardsContainer = styled.div`
  display: flex;
  width: 1090px;
  gap: 16px;
  padding-top: 16px;
  margin-left: 316.12px;
`;

export const LeftCard = styled.div`
  width: 532px;
  height: 300.49px;
  margin-left: 316.12px;
  margin-top: 16px;
  padding: 24px;
  border-radius: 8px 0px 0px 0px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const RightCard = styled.div`
  width: 533px;
  height: auto;
  padding: 24px;
  margin-top: 16px;
  border-radius: 8px 0px 0px 0px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Card = styled.div`
  width: 205.2px;
  height: 140px;
  padding: 16px;
  border-radius: 8px 0px 0px 0px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  opacity: 1;
`;

export const CardTitle = styled.h3`
  font-size: 16px;
  color: #333;
`;

export const CardValue = styled.p`
  font-size: 14px;
  color: #666;
`;
