import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  margin-top: 10px;
  padding: 11px 0 15px;
`;

export const Tab = styled.div`
  width: 100%;
  margin-top: 10px;
  padding: 11px 15px;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  outline: 0;
  color: var(--gray);
  cursor: pointer;
  white-space: nowrap;
  &:hover {
    color: var(--twitter);
    background: var(--twitter-dark-hover);
    border-bottom: 2px solid var(--twitter);
  }
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;
