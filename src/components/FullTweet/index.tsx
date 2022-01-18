import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import { Avatar, IconButton, Paper, Typography } from '@mui/material';
import format from 'date-fns/format';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { TweetHeader, TweetsWrapper } from '../Tweet/styles';
import { fetchTweet, setTweet } from '../../store/ducks/tweet/actionCreators';
import { selectTweetItem } from '../../store/ducks/tweet/selectors';
import BackComponent from '../BackComponent';
import Tweet from '../Tweet/';
import UserIcon from '../../assets/images/user.png';
import { Wrapper } from './styles';

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
    <Wrapper>
      <Paper variant='outlined' sx={{ display: 'flex', alignItems: 'center' }}>
        <BackComponent />
        <Typography variant='h6'>Tweet</Typography>
      </Paper>
      <TweetsWrapper variant='outlined'>
        <Link to={`/home/tweets/${tweet?._id}`}>
          <TweetHeader>
            <Avatar alt='User Avatar' src={UserIcon} sx={{ marginRight: 1 }} />
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
          <div className='tweetIconsContainer'>
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
          </div>
        </Link>
      </TweetsWrapper>
      <Tweet tweet={tweet} />
      <Tweet tweet={tweet} />
      <Tweet tweet={tweet} />
    </Wrapper>
  );
};
export default FullTweet;
