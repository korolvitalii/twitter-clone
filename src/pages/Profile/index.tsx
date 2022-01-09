import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { deepOrange } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Wrapper } from './styles';
import DateRangeIcon from '@mui/icons-material/DateRange';

const Profile: React.FC = (): React.ReactElement => {
  return (
    <Wrapper>
      <Avatar className='bigAvatar' variant='square'>
        N
      </Avatar>
      <div className='mainBlock'>
        <Avatar className='smallAvatar'>L</Avatar>
        <Button>Edit profile</Button>
      </div>
      <Typography variant='h6'>USER FULLNAME</Typography>
      <Typography variant='subtitle1' className='grayColor'>
        @nickname
      </Typography>
      <Typography variant='subtitle1' className='grayColor'>
        <DateRangeIcon className='grayColor' />
        Joined August 2014
      </Typography>
      <div className='followBlock'>
        <Typography>23 Following</Typography>
        <Typography>0 Followers</Typography>
      </div>
    </Wrapper>
  );
};

export default Profile;
