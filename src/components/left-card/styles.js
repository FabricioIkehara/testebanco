// src/components/left-card/styles.js
import styled from 'styled-components';

export const LeftCardContainer = styled.div`
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
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-family: 'Lato', sans-serif;
  font-weight: 600;
  line-height: 24px;
  color: #333;
  text-align: left;
  margin: 0 0 16px 0;
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardImageSection = styled.div`
//   width: 50%;
`;

export const CardDetailsSection = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CardDetails = styled.div`
  margin-bottom: 16px;

  div {
    font-size: 14px;
    color: #666;
  }

  .value {
    font-size: 24px;
    font-family: 'Lato', sans-serif;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
    color: #484848;
  }

  .limite-disponivel {
    width: 130px;
    height: 24px;
    margin-left: 55px;
    gap: 0px;
    opacity: 1;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    font-weight: 300;
    line-height: 24px;
    text-align: left;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
  }
`;

export const CardImage = styled.div`
  position: relative;
  width: 240px;
  height: 140px; /* Ajuste a altura conforme necessário */
  padding: 16px;
  border-radius: 8px;
  background: linear-gradient(248.54deg, #1bc681 1.38%, #0d603f 89.61%);
  color: #fff;
`;

export const ChipAndWifiContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;

  img {
    width: 40px;
    margin-right: 8px;
  }

  span {
    font-size: 24px;
  }
`;

export const CardNumberContainer = styled.div`
  margin-top: 16px;
  font-size: 18px;
  letter-spacing: 2px;
`;

export const CardInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;

export const CardName = styled.div`
  font-size: 14px;
  text-transform: uppercase;
`;

export const CardValidity = styled.div`
  font-size: 12px;
  text-align: center;
  position: relative;
  margin-bottom: 20px;
  left: -80px;  // 30px (antes) + 50px (agora)
  top: 10px;   // 5px (antes) + 5px (agora)
`;

export const FooterSection = styled.div`
  display: flex;
  align-items: flex-start;  // Corrigido o typo "fle" para "flex-start"
  margin-top: 24px;
  width: 484px;  // Ajuste da largura para preencher 484px
  height: 38px;  // Ajuste da altura para 38px
  gap: 0px;  // Espaçamento entre elementos
  justify-content: space-between;  // Alinhamento dos elementos com espaço entre eles
  opacity: 1;  // Ajuste da opacidade para 1 (visível)
  box-sizing: border-box; // Inclui preenchimentos e bordas na largura e altura total
`;

export const ProgressBarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 270px;
`;

export const ProgressBar = styled.div`
  width: 100%; /* Usa a largura total do wrapper */
  background-color: #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 8px;

  div {
    height: 8px;
    background-color: #1bc681;
    width: 100%; /* Usa a largura total da barra */
  }
`;

export const LimitTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LimitText = styled.div`
  font-size: 14px;
  color: #333;
`;

export const Button = styled.button`
  margin-left: 30px;
  font-size: 14px;
  color: #FFFFFF;
  background-color: #1bc681;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  width: 186px;
  height: 38px;
  padding: 8px 24px 8px 24px;
  gap: 10px;
  opacity: 0px;
  font-family: Lato;
  font-size: 18px;
  font-weight: 300;
  line-height: 21.6px;
  text-align: center;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;

  &:hover {
    background-color: #17a673;
  }
`;

export const VectorYellow = styled.div`
  position: absolute;
  background: #DC9E3F;
  width: 17.4px;
  height: 17.4px;
  top: 80%;
  right: 15px;
  transform: translateY(-50%);
  opacity: 1;
  border-radius: 50%;
`;

export const VectorRed = styled.div`
  position: absolute;
  background: #E5031B;
  width: 17.4px;
  height: 17.4px;
  top: 80%;
  right: 25px;
  transform: translateY(-50%);
  opacity: 1;
  border-radius: 50%;
`;
