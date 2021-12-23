import TwitterIcon from '@mui/icons-material/Twitter';
import { TextField } from '@mui/material';
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

export const SearchSideWrapper = styled('div')({
  marginTop: 3,
});
