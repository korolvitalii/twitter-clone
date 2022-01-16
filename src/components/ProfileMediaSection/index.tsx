import React from 'react';
import Button from '@mui/material/Button';
import { Wrapper } from './styles';

const ProfileMediaSection: React.FC = (): React.ReactElement => {
  return (
    <Wrapper>
      <h1>You haven’t Tweeted any photos or videos yet</h1>
      <Button>Tweet a photo or video</Button>
    </Wrapper>
  );
};

export default ProfileMediaSection;
