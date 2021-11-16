import SearchIcon from '@mui/icons-material/Search';
import { Box, Container, InputAdornment, Paper, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddTweetForm from '../../components/AddTweetForm';
import SideMenu from '../../components/SideMenu';
import Tags from '../../components/Tags';
import Tweet from '../../components/Tweet';
import { fetchTags } from '../../store/ducks/tags/actionCreators';
import { selectTagsItems } from '../../store/ducks/tags/selectors';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import { selectIsLoading, selectTweetsItems } from '../../store/ducks/tweets/selectors';
import { SearchSideWrapper, SearchTextField, TwitterIconComponent } from './Home.styled';

export interface HomeProps {}

const Home: React.FC<HomeProps> = (props): React.ReactElement => {
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweetsItems);
  const isLoading = useSelector(selectIsLoading);
  React.useEffect(() => {
    dispatch(fetchTweets());
    dispatch(fetchTags());
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
          {isLoading ? (
            <Box sx={{ textAlign: 'center', marginTop: 1 }}>
              <CircularProgress />
            </Box>
          ) : (
            tweets.map((tweet) => <Tweet key={tweet._id} user={tweet.user} text={tweet.text} />)
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
          <Tags />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
