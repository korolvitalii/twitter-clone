import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Avatar, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { removeTweet } from '../../store/ducks/tweet/actionCreators';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import { formatter } from '../../utils/formatDate';
import EditTweetModal from '../EditTweetModal';
import UserIcon from '../../assets/images/user.png';
import { TweetHeader, TweetHeaderContent, TweetIcons, TweetsWrapper } from './styles';
import { TweetInterface } from '../../store/types';

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
    event.preventDefault();
    navigate(`/home/tweets/${tweet?._id}`, { replace: false });
  };

  if (!tweet?._id) {
    return null;
  }

  return (
    <TweetsWrapper variant='outlined'>
      <div onClick={handleTweetClick}>
        <TweetHeader>
          <TweetHeaderContent>
            <Avatar alt='User Avatar' src={UserIcon} sx={{ marginRight: 1 }} />
            <Typography>
              <b>{tweet?.user?.fullname}</b>
              <span>@{tweet?.user?.username}</span>
              <span>-</span>
              <span>{formatter(tweet?.createdAt)}</span>
            </Typography>
          </TweetHeaderContent>
          <div>
            <IconButton
              aria-label='more'
              id='long-button'
              aria-controls='long-menu'
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup='true'
              onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              id='long-menu'
              MenuListProps={{
                'aria-labelledby': 'long-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              PaperProps={{
                style: {
                  maxHeight: 20 * 4.5,
                  width: '20ch',
                },
              }}>
              {options.map((option) => (
                <MenuItem key={option} onClick={handleClose}>
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </div>
        </TweetHeader>
        <div>
          <Typography sx={{ marginLeft: '25px' }} variant='body1' gutterBottom>
            {tweet?.text}
          </Typography>
        </div>
        <TweetIcons>
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
        </TweetIcons>
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
