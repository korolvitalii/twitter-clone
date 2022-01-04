import CreateIcon from '@mui/icons-material/Create';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonOutLineIcon from '@mui/icons-material/PersonOutline';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import { Box, Button, Hidden } from '@mui/material';
import * as React from 'react';
import { SideMenuItemLabel, Wrapper } from './styles';
import CreateTweetForm from '../CreateTweetForm';
import ModalBlock from '../ModalBlock';
import { fetchAddTweet } from '../../store/ducks/tweets/actionCreators';
import { useDispatch } from 'react-redux';
import UserPopover from '../../components/UserPopover';

export interface SideMenuProps {}

const SideMenu: React.FC<SideMenuProps> = (props): React.ReactElement => {
  const dispatch = useDispatch();
  const [visibleModal, setVisibleModal] = React.useState<boolean>(false);
  const onClickModalClose = (): void => {
    setVisibleModal(false);
  };
  const handleOpenModal = (): void => {
    setVisibleModal(true);
  };

  const [text, setText] = React.useState<string>('');

  const handleClick = () => {
    dispatch(fetchAddTweet(text));
    setText('');
    setVisibleModal(false);
  };

  return (
    <Wrapper>
      <ul className='sideMenuItems'>
        <li>
          <HomeIcon sx={{ fontSize: 32 }} />
          <Hidden smDown>
            <SideMenuItemLabel>Home</SideMenuItemLabel>
          </Hidden>
        </li>
        <li>
          <SearchIcon sx={{ fontSize: 32 }} />
          <Hidden smDown>
            <SideMenuItemLabel>Search</SideMenuItemLabel>
          </Hidden>
        </li>
        <li>
          <NotificationsNoneIcon sx={{ fontSize: 32 }} />
          <Hidden smDown>
            <SideMenuItemLabel>Notification</SideMenuItemLabel>
          </Hidden>
        </li>
        <li>
          <MailOutlineIcon sx={{ fontSize: 32 }} />
          <Hidden smDown>
            <SideMenuItemLabel>Messages</SideMenuItemLabel>
          </Hidden>
        </li>
        <li>
          <TurnedInNotIcon sx={{ fontSize: 32 }} />
          <Hidden smDown>
            <SideMenuItemLabel>Bookmarks</SideMenuItemLabel>
          </Hidden>
        </li>
        <li>
          <ListAltIcon sx={{ fontSize: 32 }} />
          <Hidden smDown>
            <SideMenuItemLabel>Lists</SideMenuItemLabel>
          </Hidden>
        </li>
        <li>
          <PersonOutLineIcon sx={{ fontSize: 32 }} />
          <Hidden smDown>
            <SideMenuItemLabel>Profile</SideMenuItemLabel>
          </Hidden>
        </li>
      </ul>
      <ul className='sideMenuTweetButton'>
        <li>
          <Button
            variant='contained'
            color='primary'
            sx={{ width: 200, marginBottom: 10, marginLeft: '-50px' }}
            onClick={handleOpenModal}>
            <Hidden smDown>Tweet</Hidden>
            <Hidden mdUp>
              <CreateIcon />
            </Hidden>
          </Button>
          <ModalBlock visible={visibleModal} handleClose={onClickModalClose}>
            <CreateTweetForm maxRows={15} text={text} setText={setText} handleClick={handleClick} />
          </ModalBlock>
        </li>
      </ul>
      <Box sx={{ marginBottom: 10, marginLeft: '-50px' }}>
        <UserPopover />
      </Box>
    </Wrapper>
  );
};

export default SideMenu;
