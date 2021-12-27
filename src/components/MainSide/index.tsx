import { Paper, Typography } from '@mui/material';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { selectLoadingStatus } from '../../store/ducks/tweet/selectors';
import AddTweetForm from '../AddTweetForm';
import { Alert } from '../Alert';
import Tweets from '../Tweets';

export interface MainSideProps {}

const MainSide: React.FC<MainSideProps> = (props: MainSideProps): React.ReactElement => {
  const LoadingStatus = useSelector(selectLoadingStatus);
  return (
    <>
      <Paper variant='outlined'>
        <Typography variant='h6'>Tweets</Typography>
        <AddTweetForm />
      </Paper>
      {LoadingStatus === 'ERROR' && (
        <Alert severity='error'>Cannot send message! Some error!</Alert>
      )}
      <Tweets />
    </>
  );
};

export default MainSide;
