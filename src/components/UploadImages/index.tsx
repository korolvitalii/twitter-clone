import React from 'react';

import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { ImageObj } from '../CreateTweetForm';
import { Wrapper } from './styles';
interface UploadImageProps {
  images: ImageObj[];
  onChangeImages: (callback: (prev: ImageObj[]) => ImageObj[]) => void;
}

const UploadImages: React.FC<UploadImageProps> = ({
  images,
  onChangeImages,
}): React.ReactElement => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target) {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        const fileObj = new Blob([file]);
        onChangeImages((prev) => [...prev, { blobUrl: URL.createObjectURL(fileObj), file }]);
      }
      return null;
    }
  };

  const handleRemoveImage = (url: string) => {
    onChangeImages((prev) => prev.filter((imageObj) => imageObj.blobUrl !== url));
  };

  return (
    <Wrapper>
      <input
        onChange={handleInputChange}
        style={{ display: 'none' }}
        id='raised-button-file'
        multiple
        type='file'
      />
      <label htmlFor='raised-button-file'>
        <IconButton component='span'>
          <ImageOutlinedIcon />
        </IconButton>
      </label>
      <div className='imageList'>
        {images.map((imageObj) => (
          <div
            key={imageObj.blobUrl}
            className='imageListItem'
            style={{ backgroundImage: `url(${imageObj.blobUrl})` }}>
            <IconButton
              className='removeImageIcon'
              onClick={(): void => handleRemoveImage(imageObj.blobUrl)}>
              <CloseIcon sx={{ fontSize: '10px' }} />
            </IconButton>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default UploadImages;
