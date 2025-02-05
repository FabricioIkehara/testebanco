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
  VectorYellow,
  VectorRed
} from './styles';


import chipSvg from '../../assets/chip.svg';
import wifiSvg from '../../assets/wifi.svg';

const LeftCard = ({
  title,
  limiteDisponivel,
  ultimaCompra,
  limiteMensal,
  progressoGasto,
  logoSrc,
  cardNumber,
  cardName,
  cardValidity = {},
}) => {
  const { month = '05', year = '30' } = cardValidity;

  return (
    <LeftCardContainer>
      <CardTitle>{title}</CardTitle>
      <CardContent>
        <CardImageSection>
          <CardImage>
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
              <VectorYellow />
              <VectorRed />
            </CardInfoContainer>
          </CardImage>
        </CardImageSection>
        <CardDetailsSection>
        <CardDetails>
             <div className="limite-disponivel">Limite disponível</div>
             <div className="value">{limiteDisponivel}</div>
        </CardDetails>
        <CardDetails>
            <div>Última compra</div>
            <div className="value">{`${ultimaCompra.local} - ${ultimaCompra.valor}`}</div>
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
        <Button>MAIS DETALHES</Button>
      </FooterSection>
    </LeftCardContainer>
  );
};

export default LeftCard;
