import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')`
  .sideMenuItems {
    list-style-type: none;
    padding: 0;
    margin: 0;
    margin-left: -40px;
  }

  .sideMenuItems li {
    display: inline-flex;
    align-items: center;
    width: 100%;
    border-radius: 30px;
    padding: 0;
    margin-bottom: 8px;
    height: 40px;
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
      }
    }
  }
  .sideMenuTweetButton {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
`;

export const SideMenuItemLabel = styled(Typography)`
  font-weight: 400;
  font-size: 20px;
  margin-left: 3px;
`;
