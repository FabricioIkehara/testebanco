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
  width: 240px; 
  height: 54px; 
  padding: 16px 24px;
  display: flex; 
  align-items: center;
  gap: 8px; 
  border-radius: 12px 0px 0px 12px; 
  border: none;
  cursor: pointer;
  margin-bottom: 8px; 
  opacity: 1;
  margin-left: 40px; 

  &:hover {
    background: ${props => props.active ? '#1BC681' : '#FFFFFF'};
    color: ${props => props.active ? '#FFFFFF' : '#1BC681'};
  }
`;
