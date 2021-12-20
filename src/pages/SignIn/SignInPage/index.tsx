import MessageIcon from '@mui/icons-material/ModeCommentOutlined';
import PeopleIcon from '@mui/icons-material/PeopleOutline';
import SearchIcon from '@mui/icons-material/Search';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button, Typography } from '@mui/material';
import React from 'react';
import SignIn from '../components/SignIn';
import { Wrapper } from './styles';

const SignInContainer: React.FC = (): React.ReactElement => {
  const [visibleModal, setVisibleModal] = React.useState<'SignIn' | 'SignUp'>();

  const handleClickOpenSignIn = (): void => {
    setVisibleModal('SignIn');
  };

  const handleClickOpenSignUp = (): void => {
    setVisibleModal('SignUp');
  };

  const handleClose = (): void => {
    setVisibleModal(undefined);
  };

  return (
    <Wrapper>
      <section className='blueSide'>
        <TwitterIcon color='primary' className='twitterIcon' />
        <ul className='blueSideListInfo'>
          <li className='blueSideListInfoItem'>
            <Typography variant='h6'>
              <SearchIcon className='blueSideListInfoIcon' />
              Read about what interests you.
            </Typography>
          </li>
          <li className='blueSideListInfoItem'>
            <Typography variant='h6'>
              <PeopleIcon className='blueSideListInfoIcon' />
              Find out what the world is talking about.
            </Typography>
          </li>
          <li className='blueSideListInfoItem'>
            <Typography variant='h6'>
              <MessageIcon className='blueSideListInfoIcon' />
              Join the conversation.
            </Typography>
          </li>
        </ul>
      </section>
      <section className='loginSide'>
        <div className='loginSideWrapper'>
          <TwitterIcon color='primary' className='loginSideTwitterIcon' />
          <Typography className='loginSideTitle'>Happening now</Typography>
          <div className='loginSideField'>
            <Typography variant='h4'>
              <b>Join Twitter today.</b>
            </Typography>
            <br />
            <Button
              className='buttonSignUp'
              variant='contained'
              color='primary'
              fullWidth
              onClick={handleClickOpenSignUp}>
              Sign up
            </Button>
            <Button variant='outlined' color='primary' fullWidth onClick={handleClickOpenSignIn}>
              Log in
            </Button>
          </div>
        </div>

        <SignIn isVisible={visibleModal === 'SignIn'} handleClose={handleClose} title={'SignIn'} />
        <SignIn isVisible={visibleModal === 'SignUp'} handleClose={handleClose} title={'SignUp'} />
      </section>
    </Wrapper>
  );
};

export default SignInContainer;
