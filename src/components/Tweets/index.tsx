import CircularProgress from '@mui/material/CircularProgress';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoading, selectTweetsItems } from '../../store/ducks/tweets/selectors';
import { Centered } from '../../styles';
import Tweet from '../Tweet';

const Tweets: React.FC = (): React.ReactElement | null => {
  const tweets = useSelector(selectTweetsItems);
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      {isLoading ? (
        <Centered>
          <CircularProgress />
        </Centered>
      ) : (
        tweets.map((tweet) => <Tweet key={tweet._id} {...tweet} />)
      )}
    </>
  );
};

export default Tweets;
