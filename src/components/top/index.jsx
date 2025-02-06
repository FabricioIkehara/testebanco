import React, { useState } from 'react';
import { TopBarContainer, SearchContainer, SearchInput, Icon, UserContainer, SearchIconWrapper, RightContainer } from './styles';
import { ReactComponent as IconBell } from '../../assets/icon-bell.svg';
import { ReactComponent as IconUser } from '../../assets/icon-user.svg';
import { ReactComponent as IconSearch } from '../../assets/icon-search.svg';

const TopBar = ({ userName }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();

    // Validação do campo de busca vazio
    if (searchTerm.trim() === '') {
      alert('Por favor, preencha o campo de busca.');
      return;
    }

    console.log('Buscando por:', searchTerm);
  };

  return (
    <TopBarContainer>
      <SearchContainer as="form" onSubmit={handleSearch}>
        <SearchIconWrapper>
          <IconSearch className="search-icon" />
        </SearchIconWrapper>
        <SearchInput 
          type="text" 
          placeholder="Buscar..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchContainer>
      <RightContainer>
        <Icon>
          <IconBell width={20} height={20} />
        </Icon>
        <UserContainer>
          <IconUser width={20} height={20} />
          <span>Bem vindo, {userName}</span>
        </UserContainer>
      </RightContainer>
    </TopBarContainer>
  );
};

export default TopBar;
