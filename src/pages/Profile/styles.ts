import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')`
  border: 1px solid black;
  height: 100%;
  .bigAvatar {
    background-color: plum;
    width: 100%;
    height: 35%;
  }
  .smallAvatar {
    width: 150px;
    height: 150px;
    margin-top: -55px;
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
  }
`;
