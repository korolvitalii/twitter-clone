import React, { useState } from 'react';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import IconButton from '@mui/material/IconButton';
import { updateImages } from '../../utils/updateImages';

const UploadImages: React.FC = (): React.ReactElement => {
  const [images, setImages] = useState<string[]>([]);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target) {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        const fileObj = new Blob([file]);
        setImages((prev) => [...prev, URL.createObjectURL(fileObj)]);

        // updateImages(fileObj);
      }
      return null;
    }
  };
  return (
    <>
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
      <div>
        {images.map((url) => (
          <img src={url} alt='Avatar' />
        ))}
      </div>
    </>
  );
};

export default UploadImages;
