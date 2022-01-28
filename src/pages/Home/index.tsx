import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import { Box, CircularProgress, Container, IconButton, InputAdornment } from '@mui/material';
import Grid from '@mui/material/Grid';

import SideMenu from '../../components/SideMenu';
import Topics from '../../components/Topics';
import { SearchSideWrapper, SearchTextField, TwitterIconComponent } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import { fetchTopics } from '../../store/ducks/topics/actionCreators';
import { selectUserStatus } from '../../store/ducks/user/selectors';
import { LoadingStatus } from '../../store/types';
import { Centered } from '../../styles';
import { selectLoadingStatus } from '../../store/ducks/appication/selectors';
import { setAppLoadingAction } from '../../store/ducks/appication/actionCreators';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const loadingStatus = useSelector(selectUserStatus);
  const isReady = loadingStatus !== LoadingStatus.NEVER && loadingStatus !== LoadingStatus.LOADING;

  const localLoadingStatus = useSelector(selectLoadingStatus);
  useEffect(() => {
    debugger;
    dispatch(setAppLoadingAction(true));
  }, []);

  // dispatch(setLoadingStatus(LoadingStatus.LOADING));
  useEffect(() => {
    dispatch(fetchTweets());
    dispatch(fetchTopics());
  }, [dispatch]);

  if (!isReady || !localLoadingStatus) {
    return (
      <Centered>
        <CircularProgress />
      </Centered>
    );
  }

  return (
    <Container maxWidth='lg' sx={{ marginTop: 3 }}>
      <Grid container direction='row' justifyContent='space-around' spacing={5}>
        <Grid item xs={2} sx={{ marginLeft: '-30px' }}>
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
          <Outlet />
        </Grid>
        <Grid item xs={3}>
          <Box sx={{ display: { xs: 'none', md: 'block', lg: 'block' } }}>
            <SearchSideWrapper>
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
            </SearchSideWrapper>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'block', lg: 'block' } }}>
            <Topics />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
