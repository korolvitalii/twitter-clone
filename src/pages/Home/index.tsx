import SearchIcon from '@mui/icons-material/Search';
import { Box, Container, IconButton, InputAdornment } from '@mui/material';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import SideMenu from '../../components/SideMenu';
import Tags from '../../components/Topics';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import { SearchSideWrapper, SearchTextField, TwitterIconComponent } from './styles';

export interface HomeProps {}

const Home: React.FC<HomeProps> = (): React.ReactElement => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchTweets());
  }, [dispatch]);

  return (
    <Container maxWidth='lg' sx={{ marginTop: 3 }}>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <div style={{ position: 'fixed', width: '200px' }}>
            <IconButton sx={{ marginLeft: '-50px' }}>
              <Link to='/home'>
                <TwitterIconComponent color='primary' />
              </Link>
            </IconButton>
            <SideMenu />
          </div>
        </Grid>
        <Grid item xs={6}>
          <Outlet />
        </Grid>
        <Grid item xs={4}>
          <SearchSideWrapper>
            <SearchTextField
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
          <Tags />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
