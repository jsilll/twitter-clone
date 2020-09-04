import React from 'react';

import { Container, Tabs, Tab, Tweets } from './styles';

import Tweet from '../Tweet';

const Feed: React.FC = () => {
  return (
    <Container>
      <Tabs>
        <Tab>Tweets</Tab>
        <Tab>Tweets & replies</Tab>
        <Tab>Media</Tab>
        <Tab>Likes</Tab>
      </Tabs>
      <Tweets>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </Tweets>
    </Container>
  );
};

export default Feed;
