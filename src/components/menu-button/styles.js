// src/components/menu-button/styles.js
import styled from 'styled-components';

export const MenuButton = styled.button`
  background: ${props => props.active ? '#1BC681' : '#FFFFFF'};
  color: ${props => props.active ? '#FFFFFF' : '#1E1E1E'};
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.6px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  width: 240px; /* Largura do botão */
  height: 54px; /* Altura do botão */
  padding: 16px 24px;
  display: flex; /* Ajusta o display para flex */
  align-items: center; /* Centraliza o ícone e o texto */
  gap: 8px; /* Espaço entre o ícone e o texto */
  border-radius: 12px 0px 0px 12px; /* Cantos arredondados */
  border: none;
  cursor: pointer;
  margin-bottom: 8px; /* Espaçamento entre os botões */
  opacity: 1;
  margin-left: 40px; /* Adiciona margem à esquerda */

  &:hover {
    background: ${props => props.active ? '#1BC681' : '#FFFFFF'};
    color: ${props => props.active ? '#FFFFFF' : '#1BC681'};
  }
`;
