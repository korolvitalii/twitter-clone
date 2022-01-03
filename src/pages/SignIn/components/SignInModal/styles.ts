import DialogTitle from '@mui/material/DialogTitle/DialogTitle';
import { styled } from '@mui/material/styles';

export const DialogTitleWrapper = styled(DialogTitle)`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 32;
  padding-left: 30px;
  width: 550px;

  .close-icon {
    font-size: 24px;
  }
  .textField {
    margin-bottom: 15px;
  }
`;
