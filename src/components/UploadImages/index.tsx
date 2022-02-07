import React from 'react';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { ImageObj } from '../CreateTweetForm';
import { Wrapper } from './styles';

interface UploadImageProps {
  images: ImageObj[];
  onChangeImages: (callback: (prev: ImageObj[]) => ImageObj[]) => void;
  children: React.ReactNode;
  imagewidth: string;
  imageheight: string;
}

const UploadImages: React.FC<UploadImageProps> = ({
  images,
  onChangeImages,
  children,
  imagewidth,
  imageheight,
}): React.ReactElement => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target) {
      event.stopPropagation();
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
    <Wrapper imagewidth={imagewidth} imageheight={imageheight}>
      <input
        onChange={handleInputChange}
        style={{ display: 'none' }}
        id='raised-button-file'
        multiple
        type='file'
      />
      <label htmlFor='raised-button-file'>{children}</label>
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
