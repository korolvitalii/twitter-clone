import TextareaAutosize from '@mui/material/TextareaAutosize';
import { styled } from '@mui/material/styles';

export const Wrapper = styled('div')`
  padding: 10px;
  .formBody {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .formFooter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
  }
`;

export const AddFormTextarea = styled(TextareaAutosize)`
  width: 100%;
  border: 0;
  margin-left: 5px;
  font-size: 20px;
  outline: none;
  font-family: inherit;
  resize: none;
`;

export const AddFormCircleProgress = styled('div')`
  position: relative;
  width: 40px;
  height: 20px;
  margin: 0px 10px;
  & .MuiCircularProgress-root {
    position: absolute;
  }
`;
