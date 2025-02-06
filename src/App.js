import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import GlobalStyle from './globalStyles';
import styled, { ThemeProvider } from 'styled-components';
import Menu from './components/menu';
import Login from './pages/login/index.jsx';
import Carteira from './pages/carteira/index.jsx';
import Transferencias from './pages/transferencias/index.jsx';
import Servicos from './pages/servicos/index.jsx';
import Configuracoes from './pages/configuracoes/index.jsx';
import Dashboard from './pages/dashboard/index.jsx';
import TopBar from './components/top/index.jsx'; 
import ErrorPage from './pages/404/index';

const MainContainer = styled.div`
  ${({ path }) => path !== '/login' && `
    margin-left: 280px; 
    margin-top: 84px; 
  `}
  padding: 0px;
`;

const App = () => {
  const location = useLocation();

  const backgroundColor = location.pathname === '/login' ? '#FFFFFF' : '#1BC681';

  const theme = {
    backgroundColor,
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {location.pathname !== '/login' && (
        <>
          <Menu />
          <TopBar userName="Usuário" /> 
        </>
      )}
      <MainContainer path={location.pathname}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/carteira" element={<Carteira />} />
          <Route path="/transferencias" element={<Transferencias />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="*" element={<ErrorPage />} /> 
        </Routes>
      </MainContainer>
    </ThemeProvider>
  );
};

export default App;
