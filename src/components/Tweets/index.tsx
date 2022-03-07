import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';

import { selectIsLoading, selectTweetsItems } from '../../store/ducks/tweets/selectors';
import Tweet from '../Tweet/';
import { Centered } from '../../styles';
import { Wrapper } from './styles';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';

const Tweets: React.FC = React.memo((): React.ReactElement | null => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTweets());
  }, []);
  const tweets = useSelector(selectTweetsItems);
  const isLoading = useSelector(selectIsLoading);
  return (
    <Wrapper>
      {tweets.length === 0 && <h2>No added tweets yet.</h2>}

      {isLoading ? (
        <Centered>
          <CircularProgress />
        </Centered>
      ) : (
        tweets.map((tweet) => <Tweet key={tweet._id} tweet={tweet} />)
      )}
    </Wrapper>
  );
});

export default Tweets;
