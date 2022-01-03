import CreateIcon from '@mui/icons-material/Create';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonOutLineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import { Hidden } from '@mui/material';
import * as React from 'react';
import { SideMenuButtonTweet, SideMenuItem, SideMenuItemLabel, SideMenuItems } from './styles';
import CreateTweetForm from '../CreateTweetForm';
import ModalBlock from '../ModalBlock';
import { fetchAddTweet } from '../../store/ducks/tweets/actionCreators';
import { useDispatch } from 'react-redux';

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
    <>
      <SideMenuItems>
        <SideMenuItem>
          <SearchIcon sx={{ fontSize: 32 }} />
          <Hidden smDown>
            <SideMenuItemLabel>Search</SideMenuItemLabel>
          </Hidden>
        </SideMenuItem>
        <SideMenuItem>
          <NotificationsNoneIcon sx={{ fontSize: 32 }} />
          <Hidden smDown>
            <SideMenuItemLabel>Notification</SideMenuItemLabel>
          </Hidden>
        </SideMenuItem>
        <SideMenuItem>
          <MailOutlineIcon sx={{ fontSize: 32 }} />
          <Hidden smDown>
            <SideMenuItemLabel>Messages</SideMenuItemLabel>
          </Hidden>
        </SideMenuItem>
        <SideMenuItem>
          <TurnedInNotIcon sx={{ fontSize: 32 }} />
          <Hidden smDown>
            <SideMenuItemLabel>Bookmarks</SideMenuItemLabel>
          </Hidden>
        </SideMenuItem>
        <SideMenuItem>
          <ListAltIcon sx={{ fontSize: 32 }} />
          <Hidden smDown>
            <SideMenuItemLabel>Lists</SideMenuItemLabel>
          </Hidden>
        </SideMenuItem>
        <SideMenuItem>
          <PersonOutLineIcon sx={{ fontSize: 32 }} />
          <Hidden smDown>
            <SideMenuItemLabel>Profile</SideMenuItemLabel>
          </Hidden>
        </SideMenuItem>
      </SideMenuItems>
      <SideMenuItem>
        <SideMenuButtonTweet
          variant='contained'
          color='primary'
          fullWidth
          onClick={handleOpenModal}>
          <Hidden smDown>Tweet</Hidden>
          <Hidden mdUp>
            <CreateIcon />
          </Hidden>
        </SideMenuButtonTweet>
        <ModalBlock visible={visibleModal} handleClose={onClickModalClose}>
          <CreateTweetForm maxRows={15} text={text} setText={setText} handleClick={handleClick} />
        </ModalBlock>
      </SideMenuItem>
    </>
  );
};

export default SideMenu;
