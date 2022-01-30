import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')`
  .sideMenuItems {
    display: flex;
    flex-direction: column;
    width: 80%;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  .menuIcon {
    font-size: 32px;
  }
  .addTweetSmallIcon {
    width: 55px;
    height: 55px;
    color: white;
    background-color: rgb(29, 161, 242);
    & :hover {
      background-color: rgb(29, 161, 222);
    }
  }
  .sideMenuItems li a {
    display: inline-flex;
    align-items: center;
    border-radius: 30px;
    padding: 0;
    margin-bottom: 8px;
    height: 40px;
    color: black;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.15s ease-in-out;
    & p {
      padding-left: 10px;
    }
    &:hover {
      background-color: #e6ecf0;
      width: 90%;
      & svg {
        color: rgb(29, 161, 242);
      }
      & p {
        color: rgb(29, 161, 242);
        width: 100%;
      }
    }
  }

  .sideMenuFooter {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 180px;
    padding: 10px 0;
  }

  .sideMenuFooter li {
    list-style-type: none;
  }

  .tweetButton {
    width: 200px;
  }
`;

export const SideMenuItemLabel = styled(Typography)`
  font-weight: 400;
  font-size: 20px;
  margin-left: 3px;
`;
