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
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import avatarImage from '../../assets/images/user.png';
import { useFetchUserData } from '../../hooks/useFetchUserData';
import { fetchUserData, logOut } from '../../store/ducks/user/actionCreators';
import { Centered } from '../../styles';
import { Wrapper } from './styles';
import TwitterIcon from '@mui/icons-material/Twitter';

const emails = ['username@gmail.com', 'user02@gmail.com'];

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

const UserPopover: React.FC = (): React.ReactElement => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  return (
    <Wrapper>
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
      <Button
        className='popoverButton'
        aria-describedby={id}
        variant='contained'
        onClick={handleClick}>
        <div className='popoverButtonContainer'>
          <Avatar alt='Remy Sharp' src={avatarImage} sx={{ marginLeft: '-30px' }} />
          <div className='popoverButtonDescription'>
            <Typography variant='subtitle2'>@USERNAME</Typography>
            <Typography variant='subtitle2'>@USERNICK</Typography>
          </div>
        </div>
      </Button>

      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
    </Wrapper>
  );
};

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;
  const dispatch = useDispatch();
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    if (value === 'Log out') {
      dispatch(logOut());
      dispatch(fetchUserData());
    }
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      sx={{
        display: 'flex',
        marginBottom: '-350px',
        marginLeft: '-25px',
      }}>
      <List sx={{ pt: 0, width: '200px' }}>
        <ListItem button onClick={() => handleListItemClick('User')} key='email'>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
              <PersonIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='user name' />
        </ListItem>
        <ListItem autoFocus button onClick={() => handleListItemClick('Log out')}>
          <ListItemText primary='Log out' />
        </ListItem>
      </List>
    </Dialog>
  );
}

export default UserPopover;
