import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import MessageIcon from '@mui/icons-material/ModeCommentOutlined';
import PeopleIcon from '@mui/icons-material/PeopleOutline';
import SearchIcon from '@mui/icons-material/Search';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button, Typography } from '@mui/material';
import SignInModal from '../components/SignInModal';
import SignUpModal, { NotificationStatusInterface } from '../components/SignUpModal';
import { Wrapper } from './styles';
import { useSelector } from 'react-redux';
import { selectIsAuth, selectUserStatus } from '../../../store/ducks/user/selectors';
import { LoadingStatus } from '../../../store/types';
import Notification from '../../SignIn/components/Notification';

interface NoticationStatusInterface {
  text: string;
  handleCloseNotification: () => void;
  alertSeverity: 'success' | 'error';
  setOpen?: Dispatch<SetStateAction<boolean>>;
}
const Layout: React.FC = (): React.ReactElement => {
  const [visibleModal, setVisibleModal] = React.useState<string | null>();
  const userLoadingStatus = useSelector(selectUserStatus);
  console.log(userLoadingStatus);

  const [open, setOpen] = useState<boolean>(false);

  const handleOpenModal = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setVisibleModal(e.currentTarget.textContent);
  };

  const handleClose = (): void => {
    setVisibleModal(undefined);
  };
  const handleCloseNotification = () => {
    setOpen(false);
  };
  const [notificationStatus, setNotificationStatus] = useState<NotificationStatusInterface>({
    text: '',
    handleCloseNotification,
    setOpen,
    alertSeverity: 'error',
  });

  const loadingStatus = useSelector(selectUserStatus);
  const isReady = loadingStatus !== LoadingStatus.NEVER && loadingStatus !== LoadingStatus.LOADING;

  const isAuth = useSelector(selectIsAuth);

  const didMountRef = useRef(false);
  //TODO:
  // 1. Check notification after login, and after authMe
  useEffect(() => {
    if (isReady && !isAuth) {
      if (didMountRef.current) {
        console.log('work');
        setNotificationStatus({
          text: 'Failed!',
          handleCloseNotification,
          alertSeverity: 'error',
        });
        setOpen(true);
      }
    }
    didMountRef.current = true;
    // else {
    //   setNotificationStatus({
    //     text: 'Success!',
    //     handleCloseNotification,
    //     alertSeverity: 'success',
    //   });
    //   setOpen(true);
    // }
  }, [isAuth, isReady]);
  return (
    <Wrapper>
      <section className='blueSide'>
        <TwitterIcon color='primary' className='twitterIcon' />
        <ul className='blueSideListInfo'>
          <li className='blueSideListInfoItem'>
            <Typography variant='h6'>
              <SearchIcon className='blueSideListInfoIcon' />
              Read about what interests you.
            </Typography>
          </li>
          <li className='blueSideListInfoItem'>
            <Typography variant='h6'>
              <PeopleIcon className='blueSideListInfoIcon' />
              Find out what the world is talking about.
            </Typography>
          </li>
          <li className='blueSideListInfoItem'>
            <Typography variant='h6'>
              <MessageIcon className='blueSideListInfoIcon' />
              Join the conversation.
            </Typography>
          </li>
        </ul>
      </section>
      <section className='loginSide'>
        <div className='loginSideWrapper'>
          <TwitterIcon color='primary' className='loginSideTwitterIcon' />
          <Typography className='loginSideTitle'>Happening now</Typography>
          <div className='loginSideField'>
            <Typography variant='h4'>
              <b>Join Twitter today.</b>
            </Typography>
            <br />
            <Button
              className='buttonSignUp'
              variant='contained'
              color='primary'
              fullWidth
              onClick={handleOpenModal}>
              Sign up
            </Button>
            <Button variant='outlined' color='primary' fullWidth onClick={handleOpenModal}>
              Sign in
            </Button>
          </div>
        </div>
        <SignInModal
          isVisible={visibleModal === 'Sign in'}
          handleClose={handleClose}
          title={'Sign In'}
        />
        <SignUpModal
          isVisible={visibleModal === 'Sign up'}
          handleClose={handleClose}
          title={'Sign Up'}
        />
        <Notification {...notificationStatus} open={open} />
      </section>
    </Wrapper>
  );
};

export default Layout;
