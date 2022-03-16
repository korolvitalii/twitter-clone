import React from 'react';
import { useSelector } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';

import { selectIsLoading } from '../../store/ducks/tweets/selectors';
import Tweet from '../Tweet/';
import { Centered } from '../../styles';
import { Wrapper } from './styles';

interface TweetsPropsInterface {
  tweets: any;
}

const Tweets: React.FC<TweetsPropsInterface> = React.memo((props): React.ReactElement | null => {
  const isLoading = useSelector(selectIsLoading);
  console.log(isLoading);

  if (props.tweets.length === 0 && !isLoading) {
    return <h2>No added tweets yet.</h2>;
  }

  return (
    <Wrapper>
      {isLoading ? (
        <Centered>
          <CircularProgress />
        </Centered>
      ) : (
        props.tweets.map((tweet: any) => <Tweet key={tweet._id} tweet={tweet} />)
      )}
    </Wrapper>
  );
});

export default Tweets;
