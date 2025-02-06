import React from 'react';
import TopBar from '../../components/top/index';
import { Container, Content, CardsContainer } from './styles';
import SmallCard from '../../components/small-card/index';
import { FaPlusCircle } from 'react-icons/fa';
import { Percentage, InfoContainer, ReceivedInfoContainer, InvestmentHighlight, CardDetails } from '../../components/small-card/styles';
import LeftCard from '../../components/left-card/index'; 
import RightCard from '../../components/right-card/index';

const Dashboard = () => {
  const userName = "Tide Cardoso"; 

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

  const purchases = [
    { date: "02/jan", establishment: "Loja de Roupas", value: "R$ 250,00" },
    { date: "02/jan", establishment: "Cafeteria", value: "R$ 30,00" },
    { date: "02/jan", establishment: "Farmácia", value: "R$ 100,00" },
    { date: "03/jan", establishment: "Supermercado", value: "R$ 150,00" },
    { date: "03/jan", establishment: "Padaria", value: "R$ 20,00" },
    { date: "03/jan", establishment: "Posto de Gasolina", value: "R$ 200,00" },
    { date: "01/jan", establishment: "Loja de Roupas", value: "R$ 50,00" }
  ];

  return (
    <Container>
      <TopBar userName={userName} />  
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
          <RightCard
            purchases={purchases}
          />
        </div>
      </Content>
    </Container>
  );
};

export default Dashboard;
