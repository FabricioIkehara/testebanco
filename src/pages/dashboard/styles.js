// src/pages/dashboard/styles.js
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #1BC681; /* Cor de plano de fundo */
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: 280px; /* Adiciona espaço para o menu lateral */
`;

export const Card = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 24px;
  color: #484848;
`;

export const CardValue = styled.p`
  font-size: 20px;
  color: #1BC681;
`;
