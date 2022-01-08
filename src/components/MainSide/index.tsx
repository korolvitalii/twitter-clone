import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Paper, Typography, Box } from '@mui/material';

import { selectLoadingStatus } from '../../store/ducks/tweet/selectors';
import { fetchAddTweet } from '../../store/ducks/tweet/actionCreators';
import CreateTweetForm from '../CreateTweetForm';
import { Alert } from '../Alert';
import Tweets from '../Tweets';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import { LoadingStatus } from '../../store/types';
import { MainSideHeadContainer, Wrapper } from './styles';

const MainSide: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const [text, setText] = React.useState<string>('');
  const loadingStatus = useSelector(selectLoadingStatus);

  const handleClick = () => {
    dispatch(fetchAddTweet(text));
    dispatch(fetchTweets());
    setText('');
  };

  return (
    <>
      <MainSideHeadContainer>
        <Typography variant='h6'>Latest Tweets</Typography>
      </MainSideHeadContainer>
      <Wrapper>
        <div className='createTweetFormWrapper'>
          <CreateTweetForm text={text} setText={setText} handleClick={handleClick} />
        </div>
        {loadingStatus === LoadingStatus.ERROR && <Alert severity='error'>Some error!</Alert>}
        <Tweets />
      </Wrapper>
    </>
  );
};

export default MainSide;
