import { Paper, Typography } from '@mui/material';
import * as React from 'react';
import AddTweetForm from './AddTweetForm';
import Tweets from './Tweets';

export interface MainSideProps {}
const MainSide: React.FC<MainSideProps> = (props: MainSideProps): React.ReactElement => {
  return (
    <>
      <Paper variant='outlined'>
        <Typography variant='h6'>Tweets</Typography>
        <AddTweetForm />
      </Paper>
      <Tweets />
    </>
  );
};

export default MainSide;
