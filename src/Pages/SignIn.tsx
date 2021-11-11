import MessageIcon from '@mui/icons-material/ModeCommentOutlined';
import PeopleIcon from '@mui/icons-material/PeopleOutline';
import SearchIcon from '@mui/icons-material/Search';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button, FormControl, FormGroup, TextField, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import ModalBlock from '../components/ModalBlock';

export const SignInUseStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: '100vh',
  },
  blueSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#71C9F8',
    flex: '0 0 50%',
    overflow: 'hidden',
    position: 'relative',
  },
  blueSideBigIcon: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    left: '50%',
    top: 0,
    transform: 'translate(-50%, -50%)',
  },
  blueSideListInfo: {
    position: 'relative',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: 380,
    '& h6': {
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      fontWeight: 700,
      fontSize: 20,
    },
  },
  blueSideListInfoItem: {
    marginBottom: 40,
  },
  blueSideListInfoIcon: {
    fontSize: 32,
    marginRight: 15,
  },
  loginSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 50%',
  },
  loginSideTwitterIcon: {
    fontSize: 45,
  },
  loginSideWrapper: {
    width: 380,
  },
  loginSideTitle: {
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 700,
    fontSize: 32,
  },
  loginSideIcon: {
    marginRight: 'auto',
  },
  loginSideField: {
    marginBottom: 18,
  },
}));

const SignIn: React.FC = (): React.ReactElement => {
  const classes = SignInUseStyles();
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
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
        <TwitterIcon
          color='primary'
          sx={{
            position: 'absolute',
            width: '300%',
            height: '300%',
            transform: 'translate(-50%, -50%)',
            left: '50%',
            top: '50%',
          }}
        />
        <ul className={classes.blueSideListInfo}>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant='h6'>
              <SearchIcon className={classes.blueSideListInfoIcon} />
              Read about what interests you.
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant='h6'>
              <PeopleIcon className={classes.blueSideListInfoIcon} />
              Find out what the world is talking about.
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant='h6'>
              <MessageIcon className={classes.blueSideListInfoIcon} />
              Join the conversation.
            </Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon color='primary' className={classes.loginSideTwitterIcon} />
          <Typography className={classes.loginSideTitle}>Happening now</Typography>
          <div className={classes.loginSideField}>
            <Typography variant='h4'>
              <b>Join Twitter today.</b>
            </Typography>
            <br />
            <Button
              style={{ marginBottom: 20 }}
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

        <ModalBlock
          visible={visibleModal === 'SignIn'}
          title={'Login'}
          classes={classes}
          handleClose={handleClose}>
          <FormControl component='fieldset' fullWidth>
            <FormGroup aria-label='position'>
              <TextField
                autoFocus
                id='email'
                label='Email'
                variant='filled'
                type='email'
                InputLabelProps={{ shrink: true }}
                required
                sx={{ marginBottom: '15px' }}
              />
              <TextField
                autoFocus
                id='password'
                label='Password'
                variant='filled'
                type='password'
                InputLabelProps={{ shrink: true }}
                required
                sx={{ marginBottom: '15px' }}
              />
            </FormGroup>
          </FormControl>
          <Button onClick={handleClose} sx={{}} fullWidth variant='outlined' color='primary'>
            Submit
          </Button>
        </ModalBlock>

        <ModalBlock
          visible={visibleModal === 'SignUp'}
          title={'Registration'}
          classes={classes}
          handleClose={handleClose}>
          <FormControl component='fieldset' fullWidth>
            <FormGroup aria-label='position'>
              <TextField
                autoFocus
                id='email'
                label='Email'
                variant='filled'
                type='email'
                InputLabelProps={{ shrink: true }}
                required
                sx={{ marginBottom: '15px' }}
              />
              <TextField
                autoFocus
                id='password'
                label='Password'
                variant='filled'
                type='password'
                InputLabelProps={{ shrink: true }}
                required
                sx={{ marginBottom: '15px' }}
              />
            </FormGroup>
          </FormControl>
          <Button onClick={handleClose} sx={{}} fullWidth variant='outlined' color='primary'>
            Submit
          </Button>
        </ModalBlock>
      </section>
    </div>
  );
};

export default SignIn;
