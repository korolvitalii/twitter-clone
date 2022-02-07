import TwitterIcon from '@mui/icons-material/Twitter';
import { TextField, Container, Alert } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SearchTextField = styled(TextField)`
  background-color: #f2f2f2;
  border-radius: 25px;
  & label.Mui-focused {
    color: rgb(29 161 242);
  }
  & MuiFormLabel-root {
    margin-left: 50;
  }
  & .MuiOutlinedInput-root {
    & svg path {
      fill: black;
      margin-right: 50px;
    }
    & fieldset {
      border-radius: 25px;
    }
    & .MuiInput-underline:after {
      border-bottom-color: #e6ecf0;
    }
    &:hover fieldset {
      border-color: rgb(29 161 242);
    }
    &.Mui-focused fieldset {
      border-color: rgb(29 161 242);
    }
  }
`;

export const TwitterIconComponent = styled(TwitterIcon)`
  font-size: 38px;
  margin-bottom: 15;
  margin-left: 15;
`;

export const SearchButtonContainer = styled('div')`
  width: 30%;
  margin-top: -55px;
  position: fixed;
  background-color: white;
  padding-top: 60px;
  padding-bottom: 10px;
  z-index: 20;
`;

export const UserConfirmedAlarm = styled(Alert)`
  position: fixed;
  bottom: 0;
  width: 100%;
`;
