import SearchIcon from '@mui/icons-material/Search';
import { Container, IconButton, InputAdornment } from '@mui/material';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import SideMenu from '../../components/SideMenu';
import Tags from '../../components/Topics';
import { fetchTopics } from '../../store/ducks/topics/actionCreators';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import { SearchSideWrapper, SearchTextField, TwitterIconComponent } from './styles';

export interface HomeProps {}

const Home: React.FC<HomeProps> = (): React.ReactElement => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchTweets());
    dispatch(fetchTopics());
  }, [dispatch]);

  return (
    <Container maxWidth='lg' sx={{ marginTop: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <IconButton>
            <Link to='/home'>
              <TwitterIconComponent color='primary' />
            </Link>
          </IconButton>
          <SideMenu />
        </Grid>
        <Grid item xs={6}>
          <Outlet />
        </Grid>
        <Grid item xs={3}>
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
