import { Paper } from '@mui/material';
import { styled } from '@mui/styles';

export const AccessibleListWrapper = styled('div')({
  marginTop: 20,
});

export const AccessibleListHeader = styled(Paper)({
  height: 50,
  backgroundColor: '#E6ECF0',
});

export const AccessibleListItem = styled(Paper)({
  height: 70,
  backgroundColor: '#E6ECF0',
  '&:hover': {
    backgroundColor: '#bfcfd9',
  },
});
