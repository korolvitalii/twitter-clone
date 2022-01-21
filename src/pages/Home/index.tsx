import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import { Box, Container, IconButton, InputAdornment } from '@mui/material';
import Grid from '@mui/material/Grid';

import SideMenu from '../../components/SideMenu';
import Topics from '../../components/Topics';
import { SearchSideWrapper, SearchTextField, TwitterIconComponent } from './styles';

export interface HomeProps {}

const Home: React.FC<HomeProps> = (): React.ReactElement => {
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
