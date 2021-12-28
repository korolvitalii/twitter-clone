import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import { Avatar, IconButton, Typography } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import * as React from 'react';
import { useNavigate } from 'react-router';
import UserIcon from '../../assets/images/user.png';
import { formatter } from '../../utils/formatDate';
import { TweetHeader, TweetHeaderContent, TweetIcons, TweetsWrapper } from './styles';

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
}: TweetProps): React.ReactElement | null => {
  const options = ['Edit', 'Delete'];
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const handleTweetClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    navigate(`/home/tweets/${_id}`, { replace: false });
  };
  if (!_id) {
    return null;
  }
  return (
    <TweetsWrapper variant='outlined'>
      <div onClick={handleTweetClick}>
        <TweetHeader>
          <TweetHeaderContent>
            <Avatar alt='User Avatar' src={UserIcon} sx={{ marginRight: 1 }} />
            <Typography>
              <b>{user?.fullname}</b>
              <span>@{user?.username}</span>
              <span>-</span>
              <span>{formatter(createdAt)}</span>
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
            {text}
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
    </TweetsWrapper>
  );
};

export default Tweet;
