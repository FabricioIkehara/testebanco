// src/components/menu/styles.js
import styled from 'styled-components';

export const Sidebar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 24px;
  width: 280px;
  height: calc(100vh - 48px); /* Ajusta a altura para ocupar toda a viewport, menos o padding */
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 60px;
  background-color: #fff;
  opacity: 1;
  
`;



export const MenuTitle = styled.div`
  width: 200px; 
  height: 43.13px; 
  margin-left: 40px;
  gap: 0px; 
  opacity: 1; 
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;





export const MenuItens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end; 
  gap: 2px; 
  width: 280px; 
  height: 286px; 
  margin-top: auto; 
  opacity: 1; 
`;



export const MenuItem = styled.div`
  padding: 15px 24px;
  font-size: 18px;
  color: #484848;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;


export const HelpBoxTitle = styled.div`
  color: #FFFFFF;
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 28.8px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  width: 140px; /* Largura */
  height: 38px; /* Altura */
  gap: 0px; 
  opacity: 1; 

`;


export const HelpBoxSubtitle = styled.div`
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 19.2px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  width: 140px; 
  height: 38px; 
  gap: 0px; 
  opacity: 1; 
  color: #FFFFFF; 
`;

export const HelpSection = styled.div`
  width: 220px; /* Largura fixa */
  height: 198px; /* Altura */
  padding: 16px;
  gap: 16px; /* Espaçamento */
  border-radius: 6px;
  opacity: 1; /* Visível */
  background: #1BC681; /* Cor de fundo */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start; /* Centraliza o HelpSection lateralmente */
  margin: 0 auto; /* Centraliza o HelpSection */
`;

export const HelpButton = styled.button`
  background: #1BC681;
  color: #FFFFFF;
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 21.6px;
  text-align: left;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  width: 144px; /* Largura do botão */
  height: 38px; /* Altura do botão */
  padding: 8px 24px; 
  gap: 10px; 
  border-radius: 6px; 
  border: 2px solid #FFFFFF; 
  cursor: pointer;
  margin-bottom: 10px; 
  opacity: 1;

  &:hover {
    background: #FFFFFF; /* Mantém a cor de fundo branca */
    color: #1BC681; /* Cor do texto ao passar o mouse */
    border: 2px solid #1BC681; /* Cor da borda ao passar o mouse */
  }

  &.active {
    background: #1BC681; /* Cor de fundo do botão ativo */
    color: #FFFFFF; /* Cor do texto do botão ativo */
    border: 2px solid #FFFFFF; /* Borda branca */
  }
`;
