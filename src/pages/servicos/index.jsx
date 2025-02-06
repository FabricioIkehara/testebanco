import React from 'react';
import TopBar from '../../components/top/index';

import { Container, Content, PlaceholderContainer, PlaceholderText } from './styles'; // Certifique-se de ter um arquivo de estilos para Carteira

const Servicos = () => {
  const userName = "Dak Prescott"; // Você pode alterar o nome do usuário conforme necessário

  return (
    <Container>
      <TopBar userName={userName} />  
      
      <Content>
        <PlaceholderContainer>
          <PlaceholderText>Placeholder de navegação</PlaceholderText>
        </PlaceholderContainer>
      </Content>
    </Container>
  );
};

export default Servicos;

