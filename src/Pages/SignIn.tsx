import { makeStyles, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/PeopleOutline';
import MessageIcon from '@mui/icons-material/ModeCommentOutlined';

const useStyles = makeStyles((theme) => ({
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
    left: '50%',
    top: '53%',
    transform: 'translate(-50%, -50%)',
    width: '260%',
    height: '260%',
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
    fontWeight: 700,
    fontSize: 32,
    marginBottom: 60,
    marginTop: 20,
  },
  loginSideField: {
    marginBottom: 18,
  },
  registerField: {
    marginBottom: theme.spacing(5),
  },
  loginFormControl: {
    marginBottom: theme.spacing(2),
  },
}));

function SignIn() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
        <TwitterIcon color='primary' className={classes.blueSideBigIcon} />
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
          <Typography variant='h1' className={classes.loginSideTitle}>
            Happening now
          </Typography>
          <div className={classes.loginSideField}>
            <Typography variant='h4'>
              <b>Join Twitter today.</b>
            </Typography>
            <br />
            <Button style={{ marginBottom: 20 }} variant='contained' color='primary' fullWidth>
              Sign up
            </Button>
            <Button variant='outlined' color='primary' fullWidth>
              Log in
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignIn;
