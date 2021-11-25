import CircularProgress from '@mui/material/CircularProgress';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoading, selectTweetsItems } from '../store/ducks/tweets/selectors';
import Tweet from './Tweet';

const Tweets: React.FC = (): React.ReactElement | null => {
  const tweets = useSelector(selectTweetsItems);
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        tweets.map((tweet) => <Tweet key={tweet._id} tweet={tweet} />)
      )}
    </>
  );
};

export default Tweets;
