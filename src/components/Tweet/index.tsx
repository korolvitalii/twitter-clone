import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Avatar, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import PersonIcon from '@mui/icons-material/Person';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import { removeTweet } from '../../store/ducks/tweet/actionCreators';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import { formatter } from '../../utils/formatDate';
import EditTweetModal from '../EditTweetModal';
import { TweetsWrapper } from './styles';
import { TweetInterface } from '../../store/types';
import CustomPopover from '../Popover';
import StandardImageList from '../ImageList';
import mediumZoom from 'medium-zoom';
import { selectIsLoading } from '../../store/ducks/tweet/selectors';

export interface TweetProps {
  tweet: TweetInterface | undefined;
}

const Tweet: React.FC<TweetProps> = ({ tweet }: TweetProps): React.ReactElement | null => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [visibleModal, setVisibleModal] = React.useState<boolean | undefined>();
  const open = Boolean(anchorEl);
  const options = ['Edit', 'Delete'];
  const isLoading = useSelector(selectIsLoading);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleCloseModal = (): void => {
    setVisibleModal(undefined);
  };

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setAnchorEl(null);
    const currentButton = event.currentTarget.textContent;
    if (currentButton === 'Edit' && tweet?._id) {
      setVisibleModal(true);
    } else if (currentButton === 'Delete' && tweet?._id) {
      dispatch(removeTweet(tweet?._id));
      dispatch(fetchTweets());
    }
  };

  const handleTweetClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    navigate(`/home/tweets/${tweet?._id}`, { replace: false });
  };
  useEffect(() => {
    if (!isLoading) {
      mediumZoom('.images-container img', {
        background: 'transparent',
        scrollOffset: 40,
      });
    }
  }, [isLoading]);

  if (!tweet?._id) {
    return null;
  }

  return (
    <TweetsWrapper variant='outlined'>
      <div>
        <Grid container spacing={0.5}>
          <Grid item xs={1}>
            <Avatar alt='user-avatar' className='userAvatar'>
              <PersonIcon />
            </Avatar>
          </Grid>
          <Grid container direction='column' justifyContent='space-between' item xs={11}>
            <Stack
              direction='column'
              justifyContent='flex-start'
              spacing={0}
              onClick={handleTweetClick}>
              <Stack direction='row' justifyContent='space-between'>
                <div className='tweetHeaderDescription'>
                  <b>{tweet?.user?.fullname}</b>
                  <span className='descriptionColor'>@{tweet?.user?.username}</span>
                  <span className='descriptionColor'> · {formatter(tweet?.createdAt)}</span>
                </div>
                <CustomPopover
                  handleClose={handleClose}
                  open={open}
                  anchorEl={anchorEl}
                  options={options}>
                  <IconButton
                    aria-label='more'
                    id='long-button'
                    aria-controls='long-menu'
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup='true'
                    onClick={handleClick}>
                    <MoreVertIcon />
                  </IconButton>
                </CustomPopover>
              </Stack>
              <Typography className='hover' variant='body1' gutterBottom>
                {tweet?.text}
              </Typography>
            </Stack>
            <div className='images-container'>
              {tweet.images.length > 0 ? <StandardImageList images={tweet.images} /> : null}
            </div>
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
          </Grid>
        </Grid>
      </div>
      <EditTweetModal
        tweetText={tweet?.text}
        tweetId={tweet?._id}
        visibleModal={visibleModal}
        handleCloseModal={handleCloseModal}
      />
    </TweetsWrapper>
  );
};

export default Tweet;
