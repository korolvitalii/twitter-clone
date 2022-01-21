import { Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAddTweet } from '../../store/ducks/tweet/actionCreators';
import { selectLoadingStatus } from '../../store/ducks/tweet/selectors';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import { LoadingStatus } from '../../store/types';
import { Alert } from '../Alert';
import CreateTweetForm from '../CreateTweetForm';
import Tweets from '../Tweets';
import { MainSideHeadContainer, Wrapper } from './styles';
import CircularProgress from '@mui/material/CircularProgress';
import { Centered } from '../../styles';
import { selectIsLoading } from '../../store/ducks/tweets/selectors';

const MainSide: React.FC = (): React.ReactElement => {
  const dispatch = useDispatch();
  const [text, setText] = React.useState<string>('');
  const loadingStatus = useSelector(selectLoadingStatus);
  const isLoading = useSelector(selectIsLoading);

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
          {isLoading ? (
            <Centered>
              <CircularProgress />
            </Centered>
          ) : (
            <CreateTweetForm text={text} setText={setText} handleClick={handleClick} />
          )}
        </div>

        {loadingStatus === LoadingStatus.ERROR && <Alert severity='error'>Some error!</Alert>}
        <Tweets />
      </Wrapper>
    </>
  );
};

export default MainSide;
