import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonOutLineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import { Avatar, Box, Button, IconButton, SvgIcon } from '@mui/material';

import { fetchAddTweet } from '../../store/ducks/tweet/actionCreators';
import UserPopover from '../../components/UserPopover';
import CreateTweetForm from '../CreateTweetForm';
import ModalBlock from '../ModalBlock';
import { SideMenuItemLabel, Wrapper } from './styles';
import { setAppLoadingAction } from '../../store/ducks/appication/actionCreators';
import { selectUserData } from '../../store/ducks/user/selectors';

const SideMenu: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  const [visibleModal, setVisibleModal] = React.useState<boolean>(false);
  const onClickModalClose = (): void => {
    setVisibleModal(false);
  };
  const handleOpenModal = (): void => {
    setVisibleModal(true);
  };

  const [text, setText] = React.useState<string>('');

  const handleClick = () => {
    dispatch(fetchAddTweet({ text, images: [] }));
    setText('');
    setVisibleModal(false);
  };

  const handleLinkClick = () => {
    dispatch(setAppLoadingAction(true));

    setTimeout(() => {
      dispatch(setAppLoadingAction(true));
    }, 100);
  };

  return (
    <>
      <Wrapper>
        <ul className='sideMenuItems'>
          <li>
            <Link to='/home' onClick={handleLinkClick}>
              <HomeIcon className='menuIcon' />
              <Box sx={{ display: { xs: 'none', lg: 'block', xl: 'none' } }}>
                <SideMenuItemLabel>Home</SideMenuItemLabel>
              </Box>
            </Link>
          </li>
          <li>
            <Link to='/profile'>
              <SearchIcon className='menuIcon' />
              <Box sx={{ display: { xs: 'none', lg: 'block', xl: 'none' } }}>
                <SideMenuItemLabel>Search</SideMenuItemLabel>
              </Box>
            </Link>
          </li>
          <li>
            <Link to='/profile' onClick={handleLinkClick}>
              <NotificationsNoneIcon className='menuIcon' />
              <Box sx={{ display: { xs: 'none', lg: 'block', xl: 'none' } }}>
                <SideMenuItemLabel>Notification</SideMenuItemLabel>
              </Box>
            </Link>
          </li>
          <li>
            <Link to='/profile'>
              <MailOutlineIcon className='menuIcon' />
              <Box sx={{ display: { xs: 'none', lg: 'block', xl: 'none' } }}>
                <SideMenuItemLabel>Messages</SideMenuItemLabel>
              </Box>
            </Link>
          </li>
          <li>
            <Link to='/profile'>
              <TurnedInNotIcon className='menuIcon' />
              <Box sx={{ display: { xs: 'none', lg: 'block', xl: 'none' } }}>
                <SideMenuItemLabel>Bookmarks</SideMenuItemLabel>
              </Box>
            </Link>
          </li>
          <li>
            <Link to='/profile'>
              <ListAltIcon className='menuIcon' />
              <Box sx={{ display: { xs: 'none', lg: 'block', xl: 'none' } }}>
                <SideMenuItemLabel>Lists</SideMenuItemLabel>
              </Box>
            </Link>
          </li>
          <li>
            <Link to={`/profile/${userData?._id}`} onClick={handleLinkClick}>
              <PersonOutLineIcon className='menuIcon' />
              <Box sx={{ display: { xs: 'none', lg: 'block', xl: 'none' } }}>
                <SideMenuItemLabel>Profile </SideMenuItemLabel>
              </Box>
            </Link>
          </li>
        </ul>
        <ul className='sideMenuFooter'>
          <li>
            <Box
              sx={{
                display: { xs: 'block', lg: 'none', xl: 'block' },
              }}>
              <IconButton className='addTweetSmallIcon' onClick={handleOpenModal}>
                <SvgIcon>
                  <path d='M8.8 7.2H5.6V3.9c0-.4-.3-.8-.8-.8s-.7.4-.7.8v3.3H.8c-.4 0-.8.3-.8.8s.3.8.8.8h3.3v3.3c0 .4.3.8.8.8s.8-.3.8-.8V8.7H9c.4 0 .8-.3.8-.8s-.5-.7-1-.7zm15-4.9v-.1h-.1c-.1 0-9.2 1.2-14.4 11.7-3.8 7.6-3.6 9.9-3.3 9.9.3.1 3.4-6.5 6.7-9.2 5.2-1.1 6.6-3.6 6.6-3.6s-1.5.2-2.1.2c-.8 0-1.4-.2-1.7-.3 1.3-1.2 2.4-1.5 3.5-1.7.9-.2 1.8-.4 3-1.2 2.2-1.6 1.9-5.5 1.8-5.7z'></path>
                </SvgIcon>
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: 'none', lg: 'block', xl: 'none' }, marginBottom: '6rem' }}>
              <Button
                variant='contained'
                color='primary'
                className='tweetButton'
                onClick={handleOpenModal}>
                <Box sx={{ display: { xs: 'none', lg: 'block', xl: 'none' } }}>Tweet</Box>
              </Button>
            </Box>
          </li>
          <li>
            <Box sx={{ position: 'absolute', top: '90%', left: '7%' }}>
              <IconButton>
                <Avatar src={userData?.smallAvatar} />
              </IconButton>
            </Box>
            <Box
              sx={{
                display: { xs: 'none', lg: 'block', xl: 'none' },
              }}>
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
});

export default SideMenu;
