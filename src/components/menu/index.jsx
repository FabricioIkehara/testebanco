import React from 'react';
import { useLocation } from 'react-router-dom';
import { Sidebar, HelpSection, MenuTitle, MenuItens, HelpButton, HelpBoxSubtitle, HelpBoxTitle } from './styles';
import Button from '../menu-button';
import logoverde from '../../assets/logoverde.jpg';

const Menu = () => {
  const location = useLocation();

  return (
    <Sidebar>
      <MenuTitle>
        <img src={logoverde} alt="Logo" className="logo" />
      </MenuTitle>
      <MenuItens>
        <Button active={location.pathname === '/dashboard'} icon="home">Painel</Button>
        <Button active={location.pathname === '/carteira'} icon="wallet">Carteira</Button>
        <Button active={location.pathname === '/transferencias'} icon="transfer">Transferências</Button>
        <Button active={location.pathname === '/servicos'} icon="service">Serviços</Button>
        <Button active={location.pathname === '/configuracoes'} icon="cog">Configurações</Button>
      </MenuItens>
      <HelpSection>
        <HelpBoxTitle>PRECISA DE AJUDA?</HelpBoxTitle>
        <HelpBoxSubtitle>Fale com um de nossos especialistas</HelpBoxSubtitle>
        <HelpButton>CONTATAR</HelpButton>
      </HelpSection>
    </Sidebar>
  );
};

export default Menu;
