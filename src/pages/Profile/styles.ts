import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')`
  height: 100%;
  .bigAvatar {
    width: 100%;
    height: 200px;
  }
  .smallAvatar {
    width: 150px;
    height: 150px;
    margin-top: -55px;
    border: 4px solid white;
  }
  .mainBlock {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .grayColor {
    color: gray;
  }
  .followBlock {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 190px;
  }
  .buttonGroup {
    display: flex;
    justify-content: space-around;

    .button {
      width: 100%;
      border-radius: 0;
      font-size: 14px;
      font-weight: 500;
      :hover {
        background-color: #bfcfd9;
      }
    }
    .button a {
      text-decoration: none;
      color: rgb(29, 161, 242);
    }
  }
  .smallAvatarModal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 90%;
    background-color: #4d4d4d;
    border: 2px solid #000;
    box-shadow: 24px;
  }

  .choosenButton {
    border-bottom: 2px solid rgb(29, 161, 242);
  }
  .link {
    text-decoration: none;
    width: 100%;
  }
`;

export const AvatarBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  height: 90%;
  background-color: #4d4d4d;
  border: 2px solid white;
  box-shadow: 24px;
`;
export const Image = styled('img')`
  width: auto;
  height: 100%;
`;
