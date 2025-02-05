import styled from 'styled-components';

export const Sidebar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 24px;
  width: 280px;
  height: calc(100vh - 48px);
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
  margin-bottom: 10px;
`;





export const MenuItens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end; 
  gap: 2px; 
  width: 280px; 
  height: 286px; 
  margin-top: 0px; 
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
  width: calc(100% - 80px); /* Ajusta a largura levando em consideração as margens esquerda e direita */
  height: 198px; 
  padding: 16px;
  gap: 16px; /* Espaçamento */
  border-radius: 6px;
  opacity: 1; /* Visível */
  background: #1BC681; /* Cor de fundo */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 30px; 
  margin-right: 40px; 
  margin-bottom: 10px;
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
  width: 144px; 
  height: 38px; 
  padding: 8px 24px; 
  gap: 10px; 
  border-radius: 6px; 
  border: 2px solid #FFFFFF; 
  cursor: pointer;
  margin-bottom: 10px; 
  opacity: 1;

  &:hover {
    background: #FFFFFF; 
    color: #1BC681; 
    border: 2px solid #1BC681;
  }

  &.active {
    background: #1BC681; 
    color: #FFFFFF; 
    border: 2px solid #FFFFFF; 
  }
`;
