import React from 'react';
import { useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';

import { selectIsLoading, selectTweetsItems } from '../../store/ducks/tweets/selectors';
import Tweet from '../Tweet/';
import { Centered } from '../../styles';

const Tweets: React.FC = React.memo((): React.ReactElement | null => {
  const tweets = useSelector(selectTweetsItems);
  const isLoading = useSelector(selectIsLoading);
  return (
    <>
      {isLoading ? (
        <Centered>
          <CircularProgress />
        </Centered>
      ) : (
        tweets.map((tweet) => <Tweet key={tweet._id} tweet={tweet} />)
      )}
    </>
  );
});

export default Tweets;
