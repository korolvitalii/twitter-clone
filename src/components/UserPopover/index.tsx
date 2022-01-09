import React from 'react';
import { useNavigate } from 'react-router-dom';
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
import Typography from '@mui/material/Typography';

import { logOut } from '../../store/ducks/user/actionCreators';
import { selectUserData } from '../../store/ducks/user/selectors';
import { Wrapper } from './styles';

export interface SimpleDialogProps {
  username: string | undefined;
  // avatar: string;
  open: boolean;
  onClose: () => void;
}

const UserPopover: React.FC = (): React.ReactElement => {
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
      <SimpleDialog username={userData?.username} open={open} onClose={handleClose} />
      <Button
        className='popoverButton'
        aria-describedby={id}
        variant='contained'
        onClick={handleClick}>
        <div className='popoverButtonContainer'>
          <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
            <PersonIcon />
          </Avatar>
          <div className='popoverButtonDescription'>
            <Typography variant='subtitle2'>{userData?.username}</Typography>
            <Typography variant='subtitle2'>{userData?.fullname}</Typography>
          </div>
        </div>
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
  const navigate = useNavigate();
  const handleListItemClick = (value: string) => {
    if (value === 'Log out') {
      dispatch(logOut());
      navigate('/signin');
    }
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      sx={{
        display: 'flex',
        marginBottom: '-350px',
        marginLeft: '25px',
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
