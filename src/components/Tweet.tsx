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
          <Avatar
            alt='User Avatar'
            src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.winhelponline.com%2Fblog%2Freplace-default-user-account-picture-avatar-windows-10%2F&psig=AOvVaw2X4NMJ7Pmbljqtfv8-TGSa&ust=1639585587163000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJCFpLfa4_QCFQAAAAAdAAAAABAD'
            sx={{ marginRight: 1 }}
          />
          <Typography component='span' variant='body1' sx={{ marginRight: 1 }}>
            {props.tweet?.user.username}
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
