import SearchIcon from '@mui/icons-material/Search';
import { Container, IconButton, InputAdornment } from '@mui/material';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
import SideMenu from '../../components/SideMenu';
import Topics from '../../components/Topics';
import { SearchSideWrapper, SearchTextField, TwitterIconComponent } from './styles';

export interface HomeProps {}

const Home: React.FC<HomeProps> = (): React.ReactElement => {
  return (
    <Container maxWidth='lg' sx={{ marginTop: 3 }}>
      <Grid container spacing={4}>
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
        <Grid item xs={7} spacing={2}>
          <Outlet />
        </Grid>
        <Grid item xs={3}>
          <SearchSideWrapper>
            <SearchTextField
              onChange={(e) => console.log(e.currentTarget.value)}
              value='asdadasd'
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
          <Topics />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
