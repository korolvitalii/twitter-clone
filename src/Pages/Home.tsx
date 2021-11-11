import ListAltIcon from '@mui/icons-material/ListAlt';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonOutLineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import { Container, IconButton, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import Tweet from '../components/Tweet';
import {
  SideMenuItem,
  SideMenuItemLabel,
  SearchSideWrapper,
  SearchTextField,
  TwitterIconComponent,
  SideMenuItems,
} from '../styled/Home.styled';

export interface HomeProps {}

const Home: React.FC = (props): React.ReactElement => {
  return (
    <Container maxWidth='lg' sx={{ marginTop: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <TwitterIconComponent color='primary' />

          <SideMenuItems>
            <SideMenuItem>
              <SearchIcon sx={{ fontSize: 32 }} />
              <SideMenuItemLabel>Search</SideMenuItemLabel>
            </SideMenuItem>
            <SideMenuItem>
              <NotificationsNoneIcon sx={{ fontSize: 32 }} />
              <SideMenuItemLabel>Notification</SideMenuItemLabel>
            </SideMenuItem>
            <SideMenuItem>
              <MailOutlineIcon sx={{ fontSize: 32 }} />
              <SideMenuItemLabel>Messages</SideMenuItemLabel>
            </SideMenuItem>
            <SideMenuItem>
              <TurnedInNotIcon sx={{ fontSize: 32 }} />
              <SideMenuItemLabel>Bookmarks</SideMenuItemLabel>
            </SideMenuItem>
            <SideMenuItem>
              <ListAltIcon sx={{ fontSize: 32 }} />
              <SideMenuItemLabel>Lists</SideMenuItemLabel>
            </SideMenuItem>
            <SideMenuItem>
              <PersonOutLineIcon sx={{ fontSize: 32 }} />
              <SideMenuItemLabel>Profile</SideMenuItemLabel>
            </SideMenuItem>
          </SideMenuItems>
        </Grid>
        <Grid item xs={6}>
          <Paper variant='outlined'>
            <Typography variant='h6'>Home</Typography>
          </Paper>
          {new Array(20).fill(
            <Tweet
              user={{
                username: 'Vitalii',
                fullname: 'vitaliivitalii',
                avatarUrl:
                  'https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png',
              }}
              text={
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam feugiat, turpis at pulvinar vulputate, erat libero tristique tellus, nec bibendum odio risus sit amet ante. Aliquam erat volutpat. Nunc auctor. Mauris pretium quam et urna. Fusce nibh. Duis risus. Curabitur sagittis hendrerit'
              }
            />,
          )}
        </Grid>
        <Grid item xs={3}>
          <SearchSideWrapper>
            <SearchTextField label='Search' />
          </SearchSideWrapper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
