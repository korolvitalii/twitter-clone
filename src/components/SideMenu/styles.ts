import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')`
  .sideMenuItems {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
  }
  .menuIcon {
    font-size: 32px;
  }

  /* .sideMenuItems li, */
  .sideMenuItems li a {
    display: inline-flex;
    align-items: center;
    border-radius: 30px;
    padding: 0;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom: 8px;
    height: 40px;
    color: black;
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.15s ease-in-out;
    & p {
      padding-left: 15px;
    }
    &:hover {
      background-color: #e6ecf0;
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
    list-style-type: none;
    height: 180px;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }
  .tweetButton {
    width: 200px;
  }
  .sideMenuFooter {
  }
`;

export const SideMenuItemLabel = styled(Typography)`
  font-weight: 400;
  font-size: 20px;
  margin-left: 3px;
`;
