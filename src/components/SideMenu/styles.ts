import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/styles';

export const SideMenuItems = styled('ul')({
  listStyleType: 'none',
  padding: 0,
  margin: 0,
});

export const SideMenuI = styled('ul')({
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

export const SideMenuButtonTweet = styled(Button)({
  // width: '180px',
});
