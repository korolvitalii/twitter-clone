import CircularProgress from '@mui/material/CircularProgress';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoading, selectTweetsItems } from '../store/ducks/tweets/selectors';
import TweetComp from './Tweet';

export interface TweetsProps {
  // tweets: Tweet[];
}

const Tweets: React.FC<TweetsProps> = (): React.ReactElement | null => {
  const tweets = useSelector(selectTweetsItems);
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      {isLoading ? (
        <CircularProgress />
      ) : (
        tweets.map((tweet) => <TweetComp key={tweet._id} {...tweet} />)
      )}
    </>
  );
};

export default Tweets;
