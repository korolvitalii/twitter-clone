import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Typography } from '@mui/material';

import { logOut } from '../../store/ducks/user/actionCreators';
import { selectUserData } from '../../store/ducks/user/selectors';
import { Wrapper } from './styles';

export interface SimpleDialogProps {
  username: string | undefined;
  open: boolean;
  onClose: () => void;
  userAvatar?: string;
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

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Wrapper>
      <SimpleDialog
        username={userData?.username}
        open={open}
        onClose={handleClose}
        userAvatar={userData?.smallAvatar}
      />
      <Button
        className='popoverButton'
        aria-describedby={id}
        variant='contained'
        onClick={handleClick}>
        <Avatar src={userData?.smallAvatar} alt='User Avatar' />
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
  userAvatar,
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
            <Avatar src={userAvatar} alt='User avatar' />
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
