import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import { Avatar, IconButton, Typography } from '@mui/material';
import * as React from 'react';
import { TweetHeader, TweetIcons, TweetsWrapper } from '../Pages/Home/Home.styled';

export interface TweetProps {
  text: string;
  user: {
    userName: string;
    fullname: string;
    avatarUrl: string;
  };
}

const Tweet: React.FC<TweetProps> = ({ text, user }: TweetProps): React.ReactElement => {
  return (
    <TweetsWrapper variant='outlined'>
      <TweetHeader>
        <Avatar alt='User Avatar' src={user.avatarUrl} sx={{ marginRight: 1 }} />

        <Typography component='span' variant='body1' sx={{ marginRight: 1 }}>
          {user.userName}
        </Typography>
        <Typography component='span' variant='subtitle2'>
          {user.fullname}
        </Typography>
        <Typography component='span'>· 11 мин</Typography>
      </TweetHeader>
      <Typography variant='body2' sx={{ margin: '10px' }}>
        {text}
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
    </TweetsWrapper>
  );
};

export default Tweet;
