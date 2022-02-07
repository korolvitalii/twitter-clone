import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import {
  Avatar,
  Button,
  CircularProgress,
  IconButton,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import UploadImages from '../UploadImages';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

import { AddFormCircleProgress, AddFormTextarea, Wrapper } from './styles';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../store/ducks/user/selectors';

export interface ImageObj {
  blobUrl: string;
  file: File;
}
export interface CreateTweetFormProps {
  maxRows?: number;
  text: string;
  setText: (arg: string) => void;
  handleClick: () => void;
  images?: ImageObj[];
  onChangeImages?: (callback: (prev: ImageObj[]) => ImageObj[]) => void;
}

const CreateTweetForm: React.FC<CreateTweetFormProps> = ({
  maxRows,
  text,
  setText,
  handleClick,
  images,
  onChangeImages,
}: CreateTweetFormProps) => {
  const userData = useSelector(selectUserData);
  const handleChangeText = (e: React.FormEvent<HTMLTextAreaElement>) => {
    if (e.currentTarget) {
      setText(e.currentTarget.value);
    }
  };

  const MAX_LENGTH = 280;
  const textLimitPercent = Math.floor((text.length / MAX_LENGTH) * 100);
  const textCount = MAX_LENGTH - text.length - 1;

  return (
    <Paper variant='outlined'>
      <Wrapper>
        <div className='formBody'>
          <Avatar src={userData?.smallAvatar} alt='User Avatar' />

          <AddFormTextarea
            placeholder="What's happenning"
            onChange={handleChangeText}
            value={text}
            maxRows={maxRows}
          />
        </div>
        <div className='formFooter'>
          <Stack>
            {/* <IconButton>
              <EmojiEmotionsOutlinedIcon />
            </IconButton> */}
            <UploadImages
              images={images ? images : []}
              onChangeImages={onChangeImages ? onChangeImages : () => {}}
              imagewidth='60px'
              imageheight='60px'>
              <IconButton component='span'>
                <ImageOutlinedIcon />
              </IconButton>
            </UploadImages>
          </Stack>
          <Stack alignItems='center' direction='row'>
            {text && (
              <>
                <Typography>{textCount}</Typography>
                <AddFormCircleProgress>
                  <CircularProgress
                    variant='determinate'
                    size={20}
                    thickness={4}
                    value={textLimitPercent}
                  />
                  <CircularProgress
                    style={
                      textLimitPercent < 100 ? { color: 'rgba(0, 0, 0, 0.1)' } : { color: 'red' }
                    }
                    variant='determinate'
                    size={20}
                    thickness={4}
                    value={100}
                  />
                </AddFormCircleProgress>
              </>
            )}
            <Button
              onClick={handleClick}
              disabled={textLimitPercent >= 100 || text.length === 0}
              color='primary'
              variant='contained'
              fullWidth
              sx={{ height: 30, width: '100%' }}>
              Tweet
            </Button>
          </Stack>
        </div>
      </Wrapper>
    </Paper>
  );
};

export default CreateTweetForm;
