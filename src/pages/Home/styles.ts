import TwitterIcon from '@mui/icons-material/Twitter';
import { TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SearchTextField = styled(TextField)`
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

export const SearchSideWrapper = styled('div')`
  margin-top: 3px;
  position: fixed;
`;
