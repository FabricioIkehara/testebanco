// styles.js para Carteira
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Content = styled.div`
  flex: 1;
  padding: 20px;
  padding-bottom: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center; // Centraliza o conteúdo se necessário
  justify-content: flex-start; // Garante que a margem tenha efeito
`;

export const PlaceholderContainer = styled.div`
  width: 1087px;
  height: 749px;
  padding: 30px 20px;
  background: #FFFFFF;
  border-radius: 8px 0px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-left: 20px;
  margin-bottom: 20px; 
  flex-shrink: 0; // para não encolher
`;

export const PlaceholderText = styled.span`
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  color: #484848;
  width: auto;
  height: auto; 
  white-space: nowrap; // Garante que o texto não quebre a linha
`;
