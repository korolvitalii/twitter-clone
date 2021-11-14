import SearchIcon from '@mui/icons-material/Search';
import { Container, InputAdornment, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import AddTweetForm from '../../components/AddTweetForm';
import SideMenu from '../../components/SideMenu';
import Tweet from '../../components/Tweet';
import {
  AccessibleListHeader,
  AccessibleListItem,
  AccessibleListWrapper,
  SearchSideWrapper,
  SearchTextField,
  TwitterIconComponent,
} from './Home.styled';

export interface HomeProps {}

const Home: React.FC<HomeProps> = (props): React.ReactElement => {
  return (
    <Container maxWidth='lg' sx={{ marginTop: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <TwitterIconComponent color='primary' />

          <SideMenu />
        </Grid>
        <Grid item xs={6}>
          <Paper variant='outlined'>
            <Typography variant='h6'>Home</Typography>
            <AddTweetForm />
          </Paper>
          {new Array(20).fill(
            <Tweet
              user={{
                username: 'Vitalii',
                fullname: 'vitaliivitalii',
                avatarUrl:
                  'https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
              }}
              text={
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna. Fusce nibh. Duis risus. Curabitur sagittis hendrerit'
              }
            />,
          )}
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
          <AccessibleListWrapper>
            <AccessibleListHeader>
              <Typography variant='h6'>Trends for you</Typography>
            </AccessibleListHeader>
            <AccessibleListItem>
              <Typography variant='subtitle1'>Lorem ipsum dolor sit amet,</Typography>
            </AccessibleListItem>
            <AccessibleListItem>
              <Typography variant='subtitle1'>Lorem ipsum dolor sit amet,</Typography>
            </AccessibleListItem>
            <AccessibleListItem>
              <Typography variant='subtitle1'>Lorem ipsum dolor sit amet,</Typography>
            </AccessibleListItem>
            <AccessibleListItem>
              <Typography variant='subtitle1'>Lorem ipsum dolor sit amet,</Typography>
            </AccessibleListItem>
          </AccessibleListWrapper>
          <AccessibleListWrapper>
            <AccessibleListHeader>
              <Typography variant='h6'>Trends for you</Typography>
            </AccessibleListHeader>
            <AccessibleListItem>
              <Typography variant='subtitle1'>Lorem ipsum dolor sit amet,</Typography>
            </AccessibleListItem>
            <AccessibleListItem>
              <Typography variant='subtitle1'>Lorem ipsum dolor sit amet,</Typography>
            </AccessibleListItem>
          </AccessibleListWrapper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
