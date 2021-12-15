import { Paper, Typography } from '@mui/material';
import * as React from 'react';
import BackComponent from './BackComponent';
import Tweet from './Tweet';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweet, setTweet } from '../store/ducks/tweet/actionCreators';
import { selectTweetItem } from '../store/ducks/tweet/selectors';

export interface FullTweetProps {}

const FullTweet: React.FC = (props): React.ReactElement => {
  const params = useParams();
  const dispatch = useDispatch();
  const tweetId = params['*'];
  const tweet = useSelector(selectTweetItem);
  React.useEffect(() => {
    if (tweetId) {
      dispatch(fetchTweet(tweetId));
    }
    return () => {
      dispatch(setTweet(undefined));
    };
  }, [tweetId, dispatch]);
  return (
    <>
      <Paper variant='outlined' sx={{ display: 'flex', alignItems: 'center' }}>
        <BackComponent />
        <Typography variant='h6'>Tweet</Typography>
      </Paper>
      <Tweet {...tweet} />
    </>
  );
};
export default FullTweet;
