import TwitterIcon from '@mui/icons-material/Twitter';
import { Button, Paper, TextareaAutosize, TextField, Typography } from '@mui/material';
import { styled } from '@mui/styles';

export const SearchTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'rgb(29, 161, 242)',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderRadius: '25px',
      // backgroundColor: '#E6ECF0',
    },
    '& svg path': {
      fill: 'red',
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

export const AddForm = styled('div')({
  padding: 10,
});

export const AddFormBody = styled('div')({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
});

export const AddFormTextarea = styled(TextareaAutosize)({
  width: '100%',
  border: 0,
  marginLeft: 5,
  fontSize: 20,
  outlne: 'none',
  fontFamily: 'inherit',
  resize: 'none',
});

export const AddFormFooter = styled('div')({});

export const AddFormBottom = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 10,
});

export const AddFormRight = styled('div')({
  display: 'flex',
  alignItems: 'center',
});
