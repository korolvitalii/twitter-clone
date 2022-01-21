import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')`
  .popoverButton {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 200px;
    background-color: white;
    color: black;
  }
  .popoverButtonContainer {
    display: flex;
    justify-content: start;
    width: 100%;
  }
  .popoverButtonDescription {
    margin-left: 5%;
  }
`;
