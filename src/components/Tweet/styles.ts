import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TweetHeader = styled('div')`
  margin: 15px 15px;
  display: flex;
  justify-content: space-between;
`;

export const TweetIcons = styled('div')`
  display: flex;
  justify-content: space-between;
  margin-left: 25;
  margin-right: 25;
`;

export const TweetsWrapper = styled(Paper)`
  border-top: 0;
  border-bottom: 0;
  :hover {
    background-color: #bfcfd9;
    transition: 0.3s;
  }
  & a {
    color: inherit;
    text-decoration: none;
  }
`;

export const TweetHeaderContent = styled('div')`
  display: flex;
`;
