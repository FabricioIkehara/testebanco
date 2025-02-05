// src/pages/dashboard/index.jsx
import React from 'react';
import { Container, Content, Card, CardTitle, CardValue } from './styles';
import Menu from '../../components/menu'; // Importar o componente Menu

const Dashboard = () => {
  return (
    <Container>
      <Menu />
      <Content>
        <Card>
          <CardTitle>Saldo Atual</CardTitle>
          <CardValue>R$ 12,345.67</CardValue>
        </Card>
        <Card>
          <CardTitle>Receitas</CardTitle>
          <CardValue>R$ 8,987.65</CardValue>
        </Card>
        <Card>
          <CardTitle>Despesas</CardTitle>
          <CardValue>R$ 4,321.00</CardValue>
        </Card>
      </Content>
    </Container>
  );
};

export default Dashboard;
