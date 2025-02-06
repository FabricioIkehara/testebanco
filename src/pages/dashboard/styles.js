import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  background-color: #1BC681;
  height: 100vh; /* Para ocupar toda a altura da tela */
  margin-right: 100px;
  margin-bottom: 0;
`;

export const Content = styled.div`
  flex-grow: 1;
  padding: 20px;
  gap: 20px;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 1160px;
  gap: 16px;
  margin-left: 20px;
`;

export const LeftCard = styled.div`
  width: 532px;
  height: 300.49px;
  margin-top: 16px;
  margin-left: 20px;
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
  margin-top: 30px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardContents = styled.div`
  width: 533px;
  padding: 24px;
  margin-top: 30px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  opacity: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Card = styled.div`
  width: 225.2px; /* Ajuste para largura adequada */
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
