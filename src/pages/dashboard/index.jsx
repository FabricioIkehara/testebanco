import React from 'react';
import TopBar from '../../components/top/index';
import Menu from '../../components/menu';
import { Container, Content, CardsContainer, RightCard } from './styles';
import SmallCard from '../../components/small-card/index';
import { FaPlusCircle } from 'react-icons/fa';
import { Percentage, InfoContainer, ReceivedInfoContainer, InvestmentHighlight, CardDetails } from '../../components/small-card/styles';
import LeftCard from '../../components/left-card/index'; 

const Dashboard = () => {
  const userName = "Dak Prescott"; 

  const cardsData = [
    {
      title: null,
      value: null,
      percentage: '+23%',
      gastoMes: 'R$ 3.547,67', 
      customClassName: 'custom-percentage-card'
    },
    {
      title: null,
      value: null,
      percentage: '+6%',
      recebidoMes: 'R$ 7.648,48',
      customClassName: 'custom-received-card'
    },
    {
      title: null,
      value: null,
      investmentHighlight: '+R$ 242,13 (+2.54%)',
      investimentoAcumulado: 'R$ 9.532,62',
      customClassName: 'custom-investment-card'
    },
    {
      title: null,
      value: null,
      cartoes: 'R$ 9.532,62',
      customClassName: 'custom-card-details'
    },
    {
      title: null,
      value: null,
      customClassName: 'custom-plus-card'
    }
  ];

  const ultimaCompra = {
    local: "Supermercado",
    valor: "R$ 150,00"
  };

  return (
    <Container>
      <TopBar userName={userName} />  {/* Passando userName para o TopBar */}
      <Menu />
      <Content>
        <CardsContainer>
          {cardsData.map((card, index) => (
            <SmallCard 
              key={index} 
              title={card.title} 
              value={card.value} 
              customClassName={card.customClassName}
              customContent={
                card.percentage && card.gastoMes ? (
                  <div>
                    <Percentage>{card.percentage}</Percentage>
                    <InfoContainer>
                      <div>Gasto do mês</div>
                      <div className="value">{card.gastoMes}</div>
                    </InfoContainer>
                  </div>
                ) : card.percentage && card.recebidoMes ? (
                  <div>
                    <Percentage>{card.percentage}</Percentage>
                    <ReceivedInfoContainer>
                      <div>Recebido esse mês</div>
                      <div className="value">{card.recebidoMes}</div>
                    </ReceivedInfoContainer>
                  </div>
                ) : card.investmentHighlight ? (
                  <div>
                    <InvestmentHighlight>
                      {card.investmentHighlight}
                    </InvestmentHighlight>
                    <InfoContainer>
                      <div>Investimento Acumulado</div>
                      <div className="value">{card.investimentoAcumulado}</div>
                    </InfoContainer>
                  </div>
                ) : card.cartoes ? (
                  <CardDetails>
                    <div className="title">Cartões</div>
                    <div className="value">{card.cartoes}</div>
                  </CardDetails>
                ) : (
                  <div>
                    <FaPlusCircle className="icon" />
                    <div className="text">
                      <div>configurar</div>
                      <div>atalhos</div>
                    </div>
                  </div>
                )
              }
            />
          ))}
        </CardsContainer>
        <div style={{ display: 'flex', gap: '16px' }}>
          <LeftCard 
            title="Cartões" 
            limiteDisponivel="R$ 2.500,00" 
            ultimaCompra={ultimaCompra} 
            limiteMensal="R$ 300/3000" 
            progressoGasto="10%"
            cardName={userName}
          />
          <RightCard>
            <h3>Right Card</h3>
            <p>Valor do Card Direito</p>
          </RightCard>
        </div>
      </Content>
    </Container>
  );
};

export default Dashboard;
