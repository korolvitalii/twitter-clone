import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Notification from '../SignIn/components/Notification';

import SearchIcon from '@mui/icons-material/Search';
import { Box, CircularProgress, IconButton, InputAdornment } from '@mui/material';
import Grid from '@mui/material/Grid';

import SideMenu from '../../components/SideMenu';
import Topics from '../../components/Topics';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopics } from '../../store/ducks/topics/actionCreators';
import {
  selectIsAuth,
  selectUserConfirmed,
  selectUserStatus,
} from '../../store/ducks/user/selectors';
import { LoadingStatus } from '../../store/types';
import { setAppLoadingAction } from '../../store/ducks/appication/actionCreators';
import { Centered } from '../../styles';
import {
  SearchTextField,
  TwitterIconComponent,
  SearchButtonContainer,
  UserConfirmedAlarm,
} from './styles';
import { NotificationStatusInterface } from '../SignIn/components/SignUpModal';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const loadingStatus = useSelector(selectUserStatus);
  const isReady = loadingStatus !== LoadingStatus.NEVER && loadingStatus !== LoadingStatus.LOADING;
  const isUserConfirmed = useSelector(selectUserConfirmed);
  const [open, setOpen] = useState<boolean>(false);

  const isAuth = useSelector(selectIsAuth);
  const handleCloseNotification = () => {
    setOpen(false);
  };
  const [notificationStatus, setNotificationStatus] = useState<NotificationStatusInterface>({
    text: '',
    handleCloseNotification,
    setOpen,
    alertSeverity: 'error',
  });

  useEffect(() => {
    if (isAuth) {
      setNotificationStatus({
        text: 'Success!',
        handleCloseNotification,
        alertSeverity: 'success',
      });
      setOpen(true);
    }
    dispatch(setAppLoadingAction(true));
  }, [dispatch, isAuth]);

  useEffect(() => {
    dispatch(fetchTopics());
  }, [dispatch]);

  if (!isReady) {
    return (
      <Centered>
        <CircularProgress />
      </Centered>
    );
  }

  return (
    <Grid
      sx={{ padding: '1rem' }}
      container
      direction='row'
      justifyContent='space-around'
      spacing={1}>
      <Grid item xs={2}>
        <div style={{ position: 'fixed' }}>
          <IconButton>
            <Link to='/home'>
              <TwitterIconComponent color='primary' />
            </Link>
          </IconButton>
          <SideMenu />
        </div>
      </Grid>
      <Grid item xs={7}>
        {!isReady ? (
          <Centered>
            <CircularProgress />
          </Centered>
        ) : (
          <Outlet />
        )}
        {!isUserConfirmed ? (
          <UserConfirmedAlarm className='userConfirmedAlarm' severity='warning'>
            Please check your email and confirm your page
          </UserConfirmedAlarm>
        ) : null}
      </Grid>
      <Grid item xs={3}>
        <Box sx={{ display: { xs: 'none', md: 'block', lg: 'block' } }}>
          <SearchButtonContainer>
            <SearchTextField
              onChange={() => {}}
              value=''
              label='Search'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </SearchButtonContainer>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'block', lg: 'block' } }}>
          <Topics />
        </Box>
        <Notification {...notificationStatus} open={open} />
      </Grid>
    </Grid>
  );
};

export default Home;
