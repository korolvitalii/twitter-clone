import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Paper, Typography } from '@mui/material';

import { selectLoadingStatus } from '../../store/ducks/tweet/selectors';
import { fetchAddTweet } from '../../store/ducks/tweets/actionCreators';
import CreateTweetForm from '../CreateTweetForm';
import { Alert } from '../Alert';
import Tweets from '../Tweets';

const MainSide: React.FC = (): React.ReactElement => {
  const LoadingStatus = useSelector(selectLoadingStatus);
  const dispatch = useDispatch();
  const [text, setText] = React.useState<string>('');
  const handleClick = () => {
    dispatch(fetchAddTweet(text));
    setText('');
  };
  return (
    <div style={{ marginLeft: '20px' }}>
      <Paper variant='outlined'>
        <Typography variant='h6'>Tweets</Typography>
        <CreateTweetForm text={text} setText={setText} handleClick={handleClick} />
      </Paper>
      {LoadingStatus === 'ERROR' && <Alert severity='error'>Some error!</Alert>}
      <Tweets />
    </div>
  );
};

export default MainSide;
