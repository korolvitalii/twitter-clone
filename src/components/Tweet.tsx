import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import { Avatar, IconButton, Typography } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { TweetHeader, TweetIcons, TweetsWrapper } from '../Pages/Home/Home.styled';
import { TweetInterface } from '../store/ducks/tweet/contracts/state';
import { formatter } from '../utils/formatDate';

export interface TweetProps {
  _id?: string;
  text?: string;
  createdAt?: string;
  user?: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
}

const Tweet: React.FC<TweetProps> = ({
  _id,
  text,
  createdAt,
  user,
}: TweetProps): React.ReactElement => {
  debugger;
  return (
    <TweetsWrapper variant='outlined'>
      <Link to={`/home/tweets/${_id}`}>
        <TweetHeader>
          <Avatar
            alt='User Avatar'
            src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.winhelponline.com%2Fblog%2Freplace-default-user-account-picture-avatar-windows-10%2F&psig=AOvVaw2X4NMJ7Pmbljqtfv8-TGSa&ust=1639585587163000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJCFpLfa4_QCFQAAAAAdAAAAABAD'
            sx={{ marginRight: 1 }}
          />
          <div>
            <Typography>
              <b>{user?.fullname}</b>
              <span>@{user?.username}</span>
              <span>-</span>
              <span>{formatter(createdAt)}</span>
            </Typography>
            <Typography variant='body1' gutterBottom>
              {text}
            </Typography>
          </div>
        </TweetHeader>
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
