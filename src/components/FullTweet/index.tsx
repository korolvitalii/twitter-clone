import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import format from 'date-fns/format';

import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import { Avatar, IconButton, Paper, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import Stack from '@mui/material/Stack';

import Tweet from '../Tweet/';
import BackComponent from '../BackComponent';
import { fetchTweet, setTweet } from '../../store/ducks/tweet/actionCreators';
import { selectTweetItem } from '../../store/ducks/tweet/selectors';
import { TweetsWrapper } from '../Tweet/styles';
import { Wrapper } from './styles';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CustomPopover from '../Popover';
import StandardImageList from '../ImageList';

const FullTweet: React.FC = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const tweetId = params.id;
  const tweet = useSelector(selectTweetItem);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const options = ['Follow', 'Add', 'Mute', 'Block', 'Report'];

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    if (tweetId) {
      dispatch(fetchTweet(tweetId));
    }
    return () => {
      dispatch(setTweet(undefined));
    };
  }, [tweetId, dispatch]);

  if (!tweet) {
    return null;
  }

  return (
    <Wrapper>
      <Paper variant='outlined' className='fullTweetHeader'>
        <BackComponent count={1} />
        <Typography variant='h6'>Tweet</Typography>
      </Paper>
      <TweetsWrapper variant='outlined'>
        <Stack direction='row' justifyContent='space-between'>
          <Stack direction='row' alignItems='center'>
            <Avatar alt='User Avatar' sx={{ marginRight: 1 }}>
              <PersonIcon />
            </Avatar>
            <Stack direction='column'>
              <b>{tweet?.user?.fullname}</b>
              <span className='userName'>@{tweet?.user?.username}</span>
            </Stack>
          </Stack>
          <CustomPopover
            handleClose={handleClose}
            open={open}
            anchorEl={anchorEl}
            options={options}>
            <IconButton className='iconbutton' onClick={handleClick}>
              <MoreHorizIcon />
            </IconButton>
          </CustomPopover>
        </Stack>
        <div className='tweetBody'>
          <Typography variant='body1' className='hover' sx={{ fontSize: '24px' }} gutterBottom>
            {tweet?.text}
          </Typography>
          <div className='images-container'>
            {tweet?.images.length > 0 ? <StandardImageList images={tweet?.images} /> : null}
          </div>
        </div>
        <Typography variant='caption' className='TweetTimestamp'>
          <span>{format(new Date(tweet?.createdAt || new Date()), 'H:mm')}</span>
          <span> · </span>
          <span>{format(new Date(tweet?.createdAt || new Date()), 'dd MMMMMM yyyy ')}</span>
        </Typography>
        <Stack direction='row' justifyContent='space-around' spacing={1}>
          <IconButton>
            <ChatBubbleOutlineOutlinedIcon />
          </IconButton>
          <IconButton>
            <RepeatOutlinedIcon />
          </IconButton>
          <IconButton>
            <FavoriteBorderOutlinedIcon />
          </IconButton>
          <IconButton>
            <ReplyOutlinedIcon />
          </IconButton>
        </Stack>
      </TweetsWrapper>
      <Tweet tweet={tweet} />
      <Tweet tweet={tweet} />
      <Tweet tweet={tweet} />
    </Wrapper>
  );
};
export default FullTweet;
