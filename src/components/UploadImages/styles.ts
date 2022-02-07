import { styled } from '@mui/material/styles';
// import { styled } from '@mui/system';
type ExtraProps = {
  imagewidth: string;
  imageheight: string;
};

export const Wrapper = styled('div')<ExtraProps>`
  .imageList {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .imageListItem {
    width: ${(props) => props.imagewidth};
    height: ${(props) => props.imageheight};
    border: 2px solid red;
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
