import styled from 'styled-components';

export const TopBarContainer = styled.div`
  width: calc(100% - 280px);
  height: 84px;
  background-color: #1BC681;
  display: flex;
  align-items: center;
  justify-content: space-between; 
  padding: 0 20px; 
  position: fixed;  
  top: 0;           
  left: 280px;
  z-index: 9999;    
`;

export const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: #1BC681;
  padding: 8px 12px;
  border-radius: 4px;
  flex-grow: 1; 
  max-width: 1089px;
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  pointer-events: none;
`;

export const SearchInput = styled.input`
  width: 240px;
  height: 36px;
  padding-left: 35px; 
  border: 1px solid #ffffff; 
  border-radius: 6px;
  background: #1BC681;
  color: #fff;
  font-size: 16px;

  &::placeholder {
    color: #fff; 
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 1089px) {
    width: 100%;
  }
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    fill: #333;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-right: 80px;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;

  svg {
    fill: #333;
    margin-right: 8px;
  }

  span {
    font-family: Lato;
    font-size: 16px;
    font-weight: 700;
    line-height: 19.2px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #FFFFFF;
  }
`;
