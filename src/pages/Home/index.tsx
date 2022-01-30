import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import { Box, CircularProgress, Container, IconButton, InputAdornment } from '@mui/material';
import Grid from '@mui/material/Grid';

import SideMenu from '../../components/SideMenu';
import Topics from '../../components/Topics';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import { fetchTopics } from '../../store/ducks/topics/actionCreators';
import { selectUserStatus } from '../../store/ducks/user/selectors';
import { LoadingStatus } from '../../store/types';
import { selectLoadingStatus } from '../../store/ducks/appication/selectors';
import { setAppLoadingAction } from '../../store/ducks/appication/actionCreators';
import { Centered } from '../../styles';
import { SearchTextField, TwitterIconComponent, SearchButtonContainer } from './styles';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const loadingStatus = useSelector(selectUserStatus);
  const isReady = loadingStatus !== LoadingStatus.NEVER && loadingStatus !== LoadingStatus.LOADING;
  const localLoadingStatus = useSelector(selectLoadingStatus);

  useEffect(() => {
    dispatch(setAppLoadingAction(true));
  }, []);

  useEffect(() => {
    dispatch(fetchTweets());
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
        {!localLoadingStatus ? (
          <Centered>
            <CircularProgress />
          </Centered>
        ) : (
          <Outlet />
        )}
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
      </Grid>
    </Grid>
  );
};

export default Home;
