import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TweetHeader = styled('div')`
  margin: 15px 15px;
  display: flex;
  justify-content: space-between;
`;

export const TweetsWrapper = styled(Paper)`
  /* height: 140px; */
  border-top: 0;
  border-bottom: 0;
  :hover {
    background-color: #e6e6e6;
    transition: 0.3s;
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
    width: 65%;
    border: 1px solid black;
  }
  .tweetBodyContainer {
    border: 1px solid black;
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
`;

export const TweetHeaderContent = styled('div')`
  display: flex;
`;
