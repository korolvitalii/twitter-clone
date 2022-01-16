import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')`
  margin-top: 70px;
  width: 300px;
`;
export const AccessibleListHeader = styled(Paper)`
  background-color: #f2f2f2;
  padding-left: 10px;
`;

export const AccessibleListItem = styled('div')`
  display: flex;
  justify-content: space-between;
  height: 70px;
  padding-left: 10px;
  padding-top: 15px;
  background-color: #f2f2f2;
  :hover {
    background-color: #e6e6e6;
    transition: 0.5s;
  }
`;
