import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')`
  margin-top: 70px;
  width: 300px;
`;
export const AccessibleListHeader = styled(Paper)`
  /* height: 50px; */
  background-color: #e6ecf0;
  padding-left: 10px;
`;

export const AccessibleListItem = styled('div')`
  height: 70px;
  padding-left: 10px;
  padding-top: 15px;
  background-color: #e6ecf0;
  :hover {
    background-color: #bfcfd9;
    transition: 0.5s;
  }
`;
