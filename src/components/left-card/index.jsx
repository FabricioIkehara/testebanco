import React from 'react';
import {
  LeftCardContainer,
  CardTitle,
  CardContent,
  CardDetailsSection,
  CardImageSection,
  CardDetails,
  ProgressBar,
  Button,
  CardImage,
  ChipAndWifiContainer,
  CardNumberContainer,
  CardInfoContainer,
  CardName,
  CardValidity,
  FooterSection,
  ProgressBarWrapper,
  LimitTextWrapper,
  LimitText,
  VectorWrapper,
  LogoContainer  
} from './styles';

import chipSvg from '../../assets/chip.svg';
import wifiSvg from '../../assets/wifi.svg';
import logoBranco from '../../assets/logo-branco.svg';
import vectorCombinedSvg from '../../assets/group8.svg'; // Import the combined SVG

const generateRandomCardNumber = () => {
  return Array(4).fill(0).map(() => Math.floor(1000 + Math.random() * 9000)).join(' ');
};

const LeftCard = ({
  title,
  limiteDisponivel,
  ultimaCompra,
  limiteMensal,
  progressoGasto,
  cardName,
  cardValidity = {},
}) => {
  const { month = '05', year = '30' } = cardValidity;
  const cardNumber = generateRandomCardNumber();

  return (
    <LeftCardContainer>
      <CardTitle>{title}</CardTitle>
      <CardContent>
        <CardImageSection>
          <CardImage>
            <LogoContainer>
              <img src={logoBranco} alt="Logo MeuBanco" />
            </LogoContainer>
            <ChipAndWifiContainer>
              <img src={chipSvg} alt="Chip" />
              <img src={wifiSvg} alt="WiFi Symbol" />
            </ChipAndWifiContainer>
            <CardNumberContainer>{cardNumber}</CardNumberContainer>
            <CardInfoContainer>
              <CardName>{cardName}</CardName>
              <CardValidity>
                <div>Validade</div>
                <div>{month}/{year}</div>
              </CardValidity>
              <VectorWrapper>
                <img src={vectorCombinedSvg} alt="Combined Vectors" />
              </VectorWrapper>
            </CardInfoContainer>
          </CardImage>
        </CardImageSection>
        <CardDetailsSection>
          <CardDetails>
            <div className="limite-disponivel">Limite disponível</div>
            <div className="value value-limit">{limiteDisponivel}</div>
          </CardDetails>
          <CardDetails>
            <div className="ultima-compra">Última compra</div>
            <div className="value value-last-buy">{`${ultimaCompra.local}   ${ultimaCompra.valor}`}</div>
          </CardDetails>
        </CardDetailsSection>
      </CardContent>
      <FooterSection>
        <ProgressBarWrapper>
          <ProgressBar>
            <div style={{ width: progressoGasto }}></div>
          </ProgressBar>
          <LimitTextWrapper>
            <LimitText>Limite mensal:</LimitText>
            <LimitText>{limiteMensal}</LimitText>
          </LimitTextWrapper>
        </ProgressBarWrapper>
        <Button onClick={() => alert('Carregar mais detalhes')}>MAIS DETALHES</Button>
      </FooterSection>
    </LeftCardContainer>
  );
};

export default LeftCard;
