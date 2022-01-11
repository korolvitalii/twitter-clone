import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import { AvatarBox, Image, Wrapper } from './styles';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Paper from '@mui/material/Paper';
import SimpleBackdrop from '../../components/Backdrop';
import bigAvatarImage from '../../assets/images/bigAvatar.jpg';
import smallAvatar from '../../assets/images/smallAvatar.jpg';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Tweets from '../../components/Tweets';

const Profile: React.FC = (): React.ReactElement => {
  const [open, setOpen] = useState('');
  const handleToggle = (value: string) => () => {
    setOpen(value);
  };
  const handleClose = () => {
    setOpen('');
  };

  return (
    <Wrapper>
      <Avatar
        className='bigAvatar'
        variant='square'
        src={bigAvatarImage}
        onClick={handleToggle('bigAvatar')}></Avatar>

      <Modal
        open={open === 'bigAvatar'}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'>
        <AvatarBox>
          <Image src={bigAvatarImage} />
        </AvatarBox>
      </Modal>

      <div className='mainBlock'>
        <Avatar
          className='smallAvatar'
          src={smallAvatar}
          onClick={handleToggle('smallAvatar')}></Avatar>
        <Modal
          open={open === 'smallAvatar'}
          onClose={handleClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'>
          <AvatarBox>
            <Image src={smallAvatar} />
          </AvatarBox>
        </Modal>

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
      <Paper className='buttonGroup'>
        <Button className='button'> Tweets</Button>
        <Button className='button'> Tweets & Replies</Button>
        <Button className='button'>Media</Button>
        <Button className='button'>Likes </Button>
      </Paper>
      <Tweets />
    </Wrapper>
  );
};

export default Profile;
