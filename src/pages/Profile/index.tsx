import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import bigAvatarImage from '../../assets/images/bigAvatar.jpg';
import smallAvatar from '../../assets/images/smallAvatar.jpg';

import EditProfileDataModal from '../../components/EditProfileDataModal';
import { selectUserData } from '../../store/ducks/user/selectors';
import { selectLoadingStatus } from '../../store/ducks/appication/selectors';
import { setAppLoadingAction } from '../../store/ducks/appication/actionCreators';

import { Centered } from '../../styles';
import { AvatarBox, Image, Wrapper } from './styles';

const Profile: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const links = ['/profile', '/profile/with_replies', '/profile/media', '/profile/likes'];
  const [value, setValue] = React.useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState('');
  const localLoadingStatus = useSelector(selectLoadingStatus);
  const user = useSelector(selectUserData);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    navigate(links[newValue]);
  };

  const handleResize = () => {
    if (window.innerWidth < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  const handleToggle = (value: string) => () => {
    setOpen(value);
  };

  const handleClose = () => {
    setOpen('');
  };

  useEffect(() => {
    dispatch(setAppLoadingAction(true));
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  if (!localLoadingStatus) {
    return (
      <Centered>
        <CircularProgress />
      </Centered>
    );
  }

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

      <Tabs
        value={value}
        onChange={handleChange}
        centered
        orientation={isMobile ? 'vertical' : 'horizontal'}>
        <Tab sx={{ width: '25%' }} label='Tweets' wrapped />
        <Tab sx={{ width: '25%' }} label='Tweets & Replies' wrapped />
        <Tab sx={{ width: '25%' }} label='Media' wrapped />
        <Tab sx={{ width: '25%' }} label='Likes' wrapped />
      </Tabs>
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
