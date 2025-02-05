import React from 'react';
import { TopBarContainer, SearchContainer, SearchInput, Icon, UserContainer, SearchIconWrapper, RightContainer } from './styles';
import { ReactComponent as IconBell } from '../../assets/icon-bell.svg';
import { ReactComponent as IconUser } from '../../assets/icon-user.svg';
import { ReactComponent as IconSearch } from '../../assets/icon-search.svg';

const TopBar = ({ userName }) => {
  return (
    <TopBarContainer>
      <SearchContainer>
        <SearchIconWrapper>
          <IconSearch className="search-icon" />
        </SearchIconWrapper>
        <SearchInput type="text" placeholder="Buscar..." />
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
