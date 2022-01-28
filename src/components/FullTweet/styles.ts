import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')`
  .fullTweetHeader {
    display: flex;
    align-items: center;
  }
  .userName {
    color: gray;
  }
  .tweetBody {
    padding: 5px;
  }
  .TweetTimestamp {
    color: gray;
    padding: 5px;
  }
  .tweetBody :hover {
    cursor: pointer;
  }
`;
