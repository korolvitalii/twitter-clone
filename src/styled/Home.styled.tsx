import TwitterIcon from '@mui/icons-material/Twitter';
import { Paper, TextField, Typography } from '@mui/material';
import { styled } from '@mui/styles';

export const SearchTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'rgb(29, 161, 242)',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: '30px',
      backgroundColor: '#E6ECF0',
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
  width: '180px',
  borderRadius: 30,
  padding: '0 10px',
  height: 40,
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
