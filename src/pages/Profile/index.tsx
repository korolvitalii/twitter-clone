import React, { useState } from 'react';
import { format } from 'date-fns';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';

import bigAvatarImage from '../../assets/images/bigAvatar.jpg';
import smallAvatar from '../../assets/images/smallAvatar.jpg';

import { AvatarBox, Image, Wrapper } from './styles';
import { Outlet, Link } from 'react-router-dom';
import EditProfileDataModal from '../../components/EditProfileDataModal';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../store/ducks/user/selectors';

const Profile: React.FC = (): React.ReactElement => {
  const [open, setOpen] = useState('');
  const user = useSelector(selectUserData);
  const handleToggle = (value: string) => () => {
    setOpen(value);
  };
  const handleClose = () => {
    setOpen('');
  };

  const [chooseButton, setChooseButton] = useState('Tweets');

  const handleClickButton = (e: any) => {
    setChooseButton(e.currentTarget.dataset.type);
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

        <Button onClick={handleToggle('Edit button')}>Edit profile</Button>
      </div>

      <Typography variant='h6'>{user?.fullname}</Typography>
      <Typography variant='subtitle1' className='grayColor'>
        {user?.username}
      </Typography>
      <Typography variant='subtitle1' className='grayColor'>
        <DateRangeIcon className='grayColor' />
        Joined {user?.createdAt ? format(new Date(user?.createdAt), 'MMMM uu') : null}
      </Typography>
      <div className='followBlock'>
        <Typography noWrap>23 Following</Typography>
        <Typography>0 Followers</Typography>
      </div>
      <Paper className='buttonGroup'>
        <Link className='link' to='/profile'>
          <Button
            data-type='Tweets'
            onClick={handleClickButton}
            className={`button ${'Tweets' === chooseButton ? 'choosenButton' : ''}`}>
            Tweets
          </Button>
        </Link>
        <Link className='link' to='/profile/with_replies'>
          <Button
            data-type='Tweets & Replies'
            onClick={handleClickButton}
            className={`button ${'Tweets & Replies' === chooseButton ? 'choosenButton' : ''}`}>
            Tweets & Replies
          </Button>
        </Link>
        <Link className='link' to='/profile/media'>
          <Button
            data-type='Media'
            onClick={handleClickButton}
            className={`button ${'Media' === chooseButton ? 'choosenButton' : ''}`}>
            Media
          </Button>
        </Link>
        <Link className='link' to='/profile/likes'>
          <Button
            data-type='Likes'
            onClick={handleClickButton}
            className={`button ${'Likes' === chooseButton ? 'choosenButton' : ''}`}>
            Likes
          </Button>
        </Link>
      </Paper>
      <EditProfileDataModal
        handleClose={handleClose}
        isVisible={open === 'Edit button'}
        title={'Edit profile'}
        user={user}
      />
      <Outlet />
    </Wrapper>
  );
};

export default Profile;
