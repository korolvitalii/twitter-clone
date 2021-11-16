import TwitterIcon from '@mui/icons-material/Twitter';
import { Button, Paper, TextField, Typography } from '@mui/material';
import { styled } from '@mui/styles';

export const SearchTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'rgb(29, 161, 242)',
  },
  '& MuiFormLabel-root': {
    marginLeft: 50,
  },
  '& .MuiOutlinedInput-root': {
    '& svg path': {
      fill: 'black',
      marginRight: 50,
    },
    '& fieldset': {
      borderRadius: '25px',
      // backgroundColor: '#E6ECF0',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#E6ECF0',
    },
    '&:hover fieldset': {
      borderColor: 'rgb(29, 161, 242)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'rgb(29, 161, 242)',
    },
  },
});

export const TwitterIconComponent = styled(TwitterIcon)({
  fontSize: 38,
  marginBottom: 15,
  marginLeft: 15,
});

export const SideMenuItems = styled('ul')({
  listStyleType: 'none',
  padding: 0,
  margin: 0,
});

export const SideMenuItem = styled('li')({
  display: 'inline-flex',
  alignItems: 'center',
  width: '100%',
  borderRadius: 30,
  padding: '0 10px',
  marginBottom: 15,
  height: 40,
  cursor: 'pointer',
  transition: 'background-color 0.15s ease-in-out',
  '& p': {
    paddingLeft: 15,
  },
  '&:hover': {
    backgroundColor: '#E6ECF0',
    '& svg': {
      color: 'rgb(29, 161, 242)',
    },
    '& p': {
      color: 'rgb(29, 161, 242)',
    },
  },
});

export const SideMenuItemLabel = styled(Typography)({
  fontWeight: 700,
  fontSize: 20,
  marginLeft: 3,
});

export const TweetsWrapper = styled(Paper)({
  borderTop: '0',
  borderBottom: '0',
});

export const SearchSideWrapper = styled('div')({
  marginTop: 3,
});

export const TweetHeader = styled('div')({
  margin: '15px 15px',
  display: 'flex',
  justifyContent: 'column',
  alignItems: 'flex-start',
});

export const TweetIcons = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  marginLeft: 25,
  marginRight: 25,
});
export const SideMenuButtonTweet = styled(Button)({
  // width: '180px',
});
