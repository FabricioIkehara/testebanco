import React from 'react';
import TopBar from '../../components/top/index';
import Menu from '../../components/menu';
import { Container, Content, PlaceholderContainer, PlaceholderText } from './styles'; // Certifique-se de ter um arquivo de estilos para Carteira

const Error = () => {
  const userName = "Dak Prescott"; 

  return (
    <Container>
      <TopBar userName={userName} />  
      <Menu />
      <Content>
        <PlaceholderContainer>
          <PlaceholderText>Essa página não existe</PlaceholderText>
        </PlaceholderContainer>
      </Content>
    </Container>
  );
};

export default Error;

