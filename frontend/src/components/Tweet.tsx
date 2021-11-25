import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import { Avatar, IconButton, Typography } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { TweetHeader, TweetIcons, TweetsWrapper } from '../Pages/Home/Home.styled';
import { TweetInterface } from '../store/ducks/tweet/contracts/state';

export interface TweetProps {
  tweet?: TweetInterface;
}

const Tweet: React.FC<TweetProps> = (props): React.ReactElement => {
  return (
    <TweetsWrapper variant='outlined'>
      <Link to={`/home/tweets/${props.tweet?._id}`}>
        <TweetHeader>
          <Avatar alt='User Avatar' src={props.tweet?.user.avatarUrl} sx={{ marginRight: 1 }} />
          <Typography component='span' variant='body1' sx={{ marginRight: 1 }}>
            {props.tweet?.user.userName}
          </Typography>
          <Typography component='span' variant='subtitle2'>
            {props.tweet?.user.fullname}
          </Typography>
          <Typography component='span'>· 11 мин</Typography>
        </TweetHeader>
        <Typography variant='body2' sx={{ margin: '10px' }}>
          {props.tweet?.text}
        </Typography>
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
      </Link>
    </TweetsWrapper>
  );
};

export default Tweet;
