import React from 'react';

import {
  Container,
  Topside,
  LogoButton,
  Logo,
  MenuButton,
  HomeIcon,
  BellIcon,
  EmailIcon,
  FavoriteIcon,
  ProfileIcon,
  FeatherIcon,
  Botside,
  Avatar,
  ProfileData,
  ExitIcon,
} from './styles';

import Button from '../Button';

const MenuBar: React.FC = () => {
  return (
    <Container>
      <Topside>
        <LogoButton>
          <Logo />
        </LogoButton>
        <MenuButton>
          <HomeIcon />
          <span>Página Inicial</span>
        </MenuButton>
        <MenuButton>
          <BellIcon />
          <span>Notificações</span>
        </MenuButton>
        <MenuButton>
          <EmailIcon />
          <span>Mensagens</span>
        </MenuButton>
        <MenuButton>
          <FavoriteIcon />
          <span>Favoritados</span>
        </MenuButton>
        <MenuButton>
          <ProfileIcon />
          <span>Perfil</span>
        </MenuButton>
        <Button>
          <FeatherIcon />
          <span>Tweetar</span>
        </Button>
      </Topside>
      <Botside>
        <Avatar />
        <ProfileData>
          <strong>Guilherme Rodz</strong>
          <span>@guilherme_rodz</span>
        </ProfileData>
        <ExitIcon />
      </Botside>
    </Container>
  );
};

export default MenuBar;
