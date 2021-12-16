import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import { Avatar, IconButton, Paper, Typography } from '@mui/material';
import format from 'date-fns/format';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { TweetHeader, TweetIcons, TweetsWrapper } from '../Pages/Home/Home.styled';
import { fetchTweet, setTweet } from '../store/ducks/tweet/actionCreators';
import { selectTweetItem } from '../store/ducks/tweet/selectors';
import BackComponent from './BackComponent';
import Tweet from './Tweet';
export interface FullTweetProps {}

const FullTweet: React.FC = (props): React.ReactElement => {
  const params = useParams();
  const dispatch = useDispatch();
  const tweetId = params['*'];
  const tweet = useSelector(selectTweetItem);
  React.useEffect(() => {
    if (tweetId) {
      dispatch(fetchTweet(tweetId));
    }
    return () => {
      dispatch(setTweet(undefined));
    };
  }, [tweetId, dispatch]);
  return (
    <>
      <Paper variant='outlined' sx={{ display: 'flex', alignItems: 'center' }}>
        <BackComponent />
        <Typography variant='h6'>Tweet</Typography>
      </Paper>
      <TweetsWrapper variant='outlined'>
        <Link to={`/home/tweets/${tweet?._id}`}>
          <TweetHeader>
            <Avatar
              alt='User Avatar'
              src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.winhelponline.com%2Fblog%2Freplace-default-user-account-picture-avatar-windows-10%2F&psig=AOvVaw2X4NMJ7Pmbljqtfv8-TGSa&ust=1639585587163000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJCFpLfa4_QCFQAAAAAdAAAAABAD'
              sx={{ marginRight: 1 }}
            />
            <Typography component='div'>
              <b>{tweet?.user?.fullname}</b>
              <span>@{tweet?.user?.username}</span>
            </Typography>
          </TweetHeader>
          <div style={{ marginLeft: '15px' }}>
            <Typography variant='body1' sx={{ fontSize: '24px' }} gutterBottom>
              {tweet?.text}
            </Typography>
          </div>
          <div style={{ marginLeft: '15px' }}>
            <Typography variant='caption' sx={{ color: 'gray' }}>
              <span style={{ marginRight: '10px' }}>
                {format(new Date(tweet?.createdAt || new Date()), 'H:mm')}
              </span>
              <span>{format(new Date(tweet?.createdAt || new Date()), 'dd MMMMMM yyyy ')}</span>
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
        </Link>
      </TweetsWrapper>
      <Tweet {...tweet} />
      <Tweet {...tweet} />
      <Tweet {...tweet} />
    </>
  );
};
export default FullTweet;
