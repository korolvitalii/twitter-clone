import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TweetHeader = styled('div')`
  margin: 15px 15px;
  display: flex;
  justify-content: space-between;
`;

export const TweetsWrapper = styled(Paper)`
  padding: 10px;
  border-top: 0;
  :hover {
    background-color: #e6e6e6;
    transition: 0.3s;
    cursor: pointer;
  }
  & a {
    color: inherit;
    text-decoration: none;
  }
  .descriptionColor {
    color: gray;
  }
  .tweetIconsContainer {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .tweetHeader {
    margin: 15px 15px;
    display: flex;
    justify-content: space-between;
  }
  .userAvatar {
    background-color: #90bafc;
    color: #1890db;
    width: 50;
    height: 50;
  }
  .hover :hover {
    cursor: pointer;
  }
`;

export const TweetHeaderContent = styled('div')`
  display: flex;
`;
