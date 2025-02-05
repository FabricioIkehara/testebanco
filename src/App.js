import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login/index.jsx';
import Carteira from './pages/carteira/Carteira.jsx';
import Transferencias from './pages/transferencias/Transferencias.jsx';
import Servicos from './pages/servicos/Servicos.jsx';
import Configuracoes from './pages/configuracoes/Configuracoes.jsx';
import Dashboard from './pages/dashboard/index.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/carteira" element={<Carteira />} />
        <Route path="/transferencias" element={<Transferencias />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
