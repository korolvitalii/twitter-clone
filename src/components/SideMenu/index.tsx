import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import CreateIcon from '@mui/icons-material/Create';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonOutLineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import { Avatar, Box, Button, IconButton } from '@mui/material';

import { fetchAddTweet } from '../../store/ducks/tweet/actionCreators';
import UserPopover from '../../components/UserPopover';
import CreateTweetForm from '../CreateTweetForm';
import ModalBlock from '../ModalBlock';
import { SideMenuItemLabel, Wrapper } from './styles';

const SideMenu: React.FC = (): React.ReactElement => {
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
      <Wrapper>
        <ul className='sideMenuItems'>
          <li>
            <Link to='/home'>
              <HomeIcon className='menuIcon' />
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <SideMenuItemLabel>Home</SideMenuItemLabel>
              </Box>
            </Link>
          </li>
          <li>
            <Link to='/profile'>
              <SearchIcon className='menuIcon' />
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <SideMenuItemLabel>Search</SideMenuItemLabel>
              </Box>
            </Link>
          </li>
          <li>
            <Link to='/profile'>
              <NotificationsNoneIcon className='menuIcon' />
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <SideMenuItemLabel>Notification</SideMenuItemLabel>
              </Box>
            </Link>
          </li>
          <li>
            <Link to='/profile'>
              <MailOutlineIcon className='menuIcon' />
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <SideMenuItemLabel>Messages</SideMenuItemLabel>
              </Box>
            </Link>
          </li>
          <li>
            <Link to='/profile'>
              <TurnedInNotIcon className='menuIcon' />
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <SideMenuItemLabel>Bookmarks</SideMenuItemLabel>
              </Box>
            </Link>
          </li>
          <li>
            <Link to='/profile'>
              <ListAltIcon className='menuIcon' />
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <SideMenuItemLabel>Lists</SideMenuItemLabel>
              </Box>
            </Link>
          </li>
          <li>
            <Link to='/profile'>
              <PersonOutLineIcon className='menuIcon' />
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <SideMenuItemLabel>Profile </SideMenuItemLabel>
              </Box>
            </Link>
          </li>
        </ul>
        <ul className='sideMenuFooter'>
          <li>
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
              <IconButton onClick={handleOpenModal}>
                <CreateIcon />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Button
                variant='contained'
                color='primary'
                className='tweetButton'
                onClick={handleOpenModal}>
                <Box sx={{ display: { xs: 'none', sm: 'block' } }}>Tweet</Box>
              </Button>
            </Box>
          </li>
          <li>
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
              <Avatar />
            </Box>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <UserPopover />
            </Box>
          </li>
        </ul>
      </Wrapper>
      <ModalBlock visible={visibleModal} handleClose={onClickModalClose}>
        <CreateTweetForm maxRows={15} text={text} setText={setText} handleClick={handleClick} />
      </ModalBlock>
    </>
  );
};

export default SideMenu;
