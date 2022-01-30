import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PersonIcon from '@mui/icons-material/Person';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton, Typography } from '@mui/material';

import { logOut } from '../../store/ducks/user/actionCreators';
import { selectUserData } from '../../store/ducks/user/selectors';
import { Wrapper } from './styles';

export interface SimpleDialogProps {
  username: string | undefined;
  // avatar: string;
  open: boolean;
  onClose: () => void;
}

const UserPopover: React.FC = () => {
  const userData = useSelector(selectUserData);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickMoreButton = (e: any) => {
    e.stopPropagation();
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Wrapper>
      <SimpleDialog username={userData?.username} open={open} onClose={handleClose} />
      <Button
        className='popoverButton'
        aria-describedby={id}
        variant='contained'
        onClick={handleClick}>
        <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
          <PersonIcon />
        </Avatar>
        <Typography variant='subtitle2'>{userData?.fullname}</Typography>
        <MoreHorizIcon />
      </Button>
    </Wrapper>
  );
};

const SimpleDialog: React.FC<SimpleDialogProps> = ({
  username,
  onClose,
  open,
}: SimpleDialogProps): React.ReactElement => {
  const dispatch = useDispatch();
  const handleClose = () => {
    onClose();
  };

  const handleListItemClick = (value: string) => {
    if (value === 'Log out') {
      dispatch(logOut());
    }
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      sx={{
        '& .MuiDialog-container': {
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
          paddingBottom: '50px',
        },
      }}
      PaperProps={{
        sx: {
          bottom: 40,
        },
      }}>
      <List sx={{ pt: 0, width: '200px' }}>
        <ListItem button onClick={() => handleListItemClick('User')} key='email'>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
              <PersonIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={username} />
        </ListItem>
        <ListItem autoFocus button onClick={() => handleListItemClick('Log out')}>
          <ListItemText primary='Log out' sx={{ textAlign: 'center' }} />
        </ListItem>
      </List>
    </Dialog>
  );
};

export default UserPopover;
