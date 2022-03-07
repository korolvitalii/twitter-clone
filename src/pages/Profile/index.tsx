import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { format } from 'date-fns';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DateRangeIcon from '@mui/icons-material/DateRange';
import CircularProgress from '@mui/material/CircularProgress';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import EditProfileDataModal from '../../components/EditProfileDataModal';
import { selectUserData } from '../../store/ducks/user/selectors';
import { selectLoadingStatus } from '../../store/ducks/appication/selectors';
import { setAppLoadingAction } from '../../store/ducks/appication/actionCreators';

import { Centered } from '../../styles';
import { Wrapper } from './styles';
import BackComponent from '../../components/BackComponent';
import { selectTweetsState } from '../../store/ducks/tweets/selectors';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';

const Profile: React.FC = (props: any) => {
  const match = useLocation();
  const currentUserId = match.pathname.split('/').pop();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const links = [
    `/profile/${currentUserId}`,
    '/profile/with_replies',
    '/profile/media',
    '/profile/likes',
  ];
  const [value, setValue] = React.useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [open, setOpen] = useState('');
  const localLoadingStatus = useSelector(selectLoadingStatus);
  const user = useSelector(selectUserData);
  const userTweets = useSelector(selectTweetsState);
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
    dispatch(fetchTweets());
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
      <BackComponent count={2} />
      <Avatar
        className='bigAvatar'
        src={user?.bigAvatar}
        variant='square'
        onClick={handleToggle('bigAvatar')}></Avatar>
      <div className='mainBlock'>
        <Avatar
          src={user?.smallAvatar}
          className='smallAvatar'
          onClick={handleToggle('smallAvatar')}></Avatar>
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
