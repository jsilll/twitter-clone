import React from 'react';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no twitter" />
        <SearchIcon />
      </SearchWrapper>
      <Body>
        <List
          title="Tavlez você curta"
          elements={[
            <FollowSuggestion name="Luiz Batanero" nickname="@luizbatanero" />,
            <FollowSuggestion name="Luiz Batanero" nickname="@luizbatanero" />,
            <FollowSuggestion name="Luiz Batanero" nickname="@luizbatanero" />,
          ]}
        />
        <List
          title="Tavlez você curta"
          elements={[<News></News>, <News></News>, <News></News>]}
        />
      </Body>
    </Container>
  );
};

export default SideBar;
