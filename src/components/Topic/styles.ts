import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')`
  .link {
    color: inherit;
    text-decoration: none;
  }
  .listItems {
    display: flex;
    justify-content: space-between;
    height: 70px;
    padding-left: 10px;
    padding-top: 15px;
    background-color: #f2f2f2;
    :hover {
      background-color: #e6e6e6;
      transition: 0.5s;
    }
  }
  .item {
    color: gray;
  }
  .iconbutton:hover {
    background-color: transparent;
  }
`;
