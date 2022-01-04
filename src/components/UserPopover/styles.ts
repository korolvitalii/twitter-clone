import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')`
  .popoverButton {
    width: 200px;
    background-color: white;
    color: black;
  }
  & :hover {
    background-color: #adadad;
  }
  .popoverButtonContainer {
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
  }
  .popoverButtonDescription {
    margin-left: 50px;
  }
`;
