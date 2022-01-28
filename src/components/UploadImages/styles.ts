import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')`
  .imageList {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .imageListItem {
    width: 60px;
    height: 60px;
    overflow: hidden;
    background-size: cover;
    background-position: center;
    border-radius: 6px;
    margin-right: 10px;
    margin-bottom: 10px;
    svg path {
      fill: white;
    }
  }
  .removeImageIcon {
    position: relative;
    top: -2px;
    right: -44px;
    padding: 3px !important;
    background-color: #ff4d4d;
  }
`;
