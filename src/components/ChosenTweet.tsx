import * as React from 'react';
import Tweet from './Tweet';
import { IconButton, Paper, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import BackComponent from './BackComponent';

export interface ChosenTweetProps {}

const ChosenTweet: React.FC = (props): React.ReactElement => {
  return (
    <>
      <Paper variant='outlined' sx={{ display: 'flex', alignItems: 'center' }}>
        <BackComponent />
        <Typography variant='h6'>Tweet</Typography>
      </Paper>
      <Tweet
        _id={''}
        text={''}
        user={{
          userName: '',
          fullname: '',
          avatarUrl: '',
        }}
      />
    </>
  );
};
export default ChosenTweet;
