import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Sidebar,
  MenuTitle,
  MenuItens,
  HelpSection,
  HelpButton,
  HelpBoxSubtitle,
  HelpBoxTitle
} from './styles';
import Button from '../menu-button';
import logoverde from '../../assets/logoverde.jpg';

const Menu = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Sidebar>
      <MenuTitle>
        <img src={logoverde} alt="Logo" className="logo" />
      </MenuTitle>
      <MenuItens>
        <Button
          active={location.pathname === '/dashboard'}
          icon="home"
          onClick={() => navigate('/dashboard')}
        >
          Painel
        </Button>
        <Button
          active={location.pathname === '/carteira'}
          icon="wallet"
          onClick={() => navigate('/carteira')}
        >
          Carteira
        </Button>
        <Button
          active={location.pathname === '/transferencias'}
          icon="transfer"
          onClick={() => navigate('/transferencias')}
        >
          Transferências
        </Button>
        <Button
          active={location.pathname === '/servicos'}
          icon="service"
          onClick={() => navigate('/servicos')}
        >
          Serviços
        </Button>
        <Button
          active={location.pathname === '/configuracoes'}
          icon="cog"
          onClick={() => navigate('/configuracoes')}
        >
          Configurações
        </Button>
      </MenuItens>
      <HelpSection>
        <HelpBoxTitle>PRECISA DE AJUDA?</HelpBoxTitle>
        <HelpBoxSubtitle>Fale com um de nossos especialistas</HelpBoxSubtitle>
        <HelpButton onClick={() => alert('Entrar em Contato')}>CONTATAR</HelpButton>
      </HelpSection>
    </Sidebar>
  );
};

export default Menu;
