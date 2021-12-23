import { Paper } from '@mui/material';
import { styled } from '@mui/styles';

export const TweetHeader = styled('div')({
  margin: '15px 15px',
  display: 'flex',
  justifyContent: 'space-between',
});

export const TweetIcons = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: 25,
  marginRight: 25,
});

export const TweetsWrapper = styled(Paper)({
  borderTop: '0',
  borderBottom: '0',
  '&:hover': {
    backgroundColor: '#bfcfd9',
  },
  '& a': {
    color: 'inherit',
    textDecoration: 'none',
  },
  // border: '1px solid green',
});

export const TweetHeaderContent = styled('div')({
  display: 'flex',
});
