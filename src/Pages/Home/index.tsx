import SearchIcon from '@mui/icons-material/Search';
import { Container, InputAdornment, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddTweetForm from '../../components/AddTweetForm';
import SideMenu from '../../components/SideMenu';
import Tweet from '../../components/Tweet';
import { setTweets } from '../../store.ts/ducks/tweets/actionCreators';
import { getTweets } from '../../store.ts/ducks/tweets/selectors';
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
  const dispatch = useDispatch();
  const items = useSelector(getTweets);
  React.useEffect(() => {
    dispatch(setTweets(items));
  }, [dispatch]);

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
          {items.map((item) => (
            <Tweet user={item.user} text={item.text} />
          ))}
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
