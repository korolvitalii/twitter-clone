import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { deepOrange } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Wrapper } from './styles';

const Profile: React.FC = (): React.ReactElement => {
  return (
    <Wrapper>
      <Avatar sx={{ bgcolor: deepOrange[500], width: '100%', height: '35%' }} variant='square'>
        N
      </Avatar>
      <Avatar sx={{ width: 150, height: 150, marginTop: '-55px' }}>L</Avatar>
      <Button>Edit profile</Button>
      <Typography>USER FULLNAME</Typography>
      <Typography>USER NICKNAME</Typography>
      <Typography>Joined</Typography>
      <Typography>23 Following</Typography>
      <Typography>0 Followers</Typography>
    </Wrapper>
  );
};

export default Profile;
