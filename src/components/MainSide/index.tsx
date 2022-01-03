import { Paper, Typography } from '@mui/material';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { selectLoadingStatus } from '../../store/ducks/tweet/selectors';
import CreateTweetForm from '../CreateTweetForm';
import { Alert } from '../Alert';
import Tweets from '../Tweets';
import { useDispatch } from 'react-redux';
import { fetchAddTweet } from '../../store/ducks/tweets/actionCreators';

export interface MainSideProps {}

const MainSide: React.FC<MainSideProps> = (props: MainSideProps): React.ReactElement => {
  const LoadingStatus = useSelector(selectLoadingStatus);
  const dispatch = useDispatch();
  const [text, setText] = React.useState<string>('');
  const handleClick = () => {
    dispatch(fetchAddTweet(text));
    setText('');
  };
  return (
    <>
      <Paper variant='outlined'>
        <Typography variant='h6'>Tweets</Typography>
        <CreateTweetForm text={text} setText={setText} handleClick={handleClick} />
      </Paper>
      {LoadingStatus === 'ERROR' && (
        <Alert severity='error'>Cannot send message! Some error!</Alert>
      )}
      <Tweets />
    </>
  );
};

export default MainSide;
