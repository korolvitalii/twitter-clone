import TextareaAutosize from '@mui/material/TextareaAutosize';
import { styled } from '@mui/styles';

export const AddForm = styled('div')({
  padding: 10,
});
export const AddFormBody = styled('div')({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
});

export const AddFormTextarea = styled(TextareaAutosize)({
  width: '100%',
  border: 0,
  marginLeft: 5,
  fontSize: 20,
  outlne: 'none',
  fontFamily: 'inherit',
  resize: 'none',
});

export const AddFormFooter = styled('div')({});

export const AddFormBottom = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 10,
});

export const AddFormRight = styled('div')({
  display: 'flex',
  alignItems: 'center',
});

export const AddFormCircleProgress = styled('div')({
  position: 'relative',
  width: 20,
  height: 20,
  margin: '0 10px',
  '& .MuiCircularProgress-root': {
    position: 'absolute',
  },
});
