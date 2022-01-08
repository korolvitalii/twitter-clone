import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')`
  margin-top: 70px;
  width: 300px;
`;
export const AccessibleListHeader = styled(Paper)`
  height: 50px;
  background-color: #e6ecf0;
`;

export const AccessibleListItem = styled(Paper)`
  height: 70px;
  background-color: #e6ecf0;
  & hover {
    background-color: #bfcfd9;
  }
`;
