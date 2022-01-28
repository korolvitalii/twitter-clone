import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import React from 'react';
import { Wrapper } from './styles';

interface ImageListProps {
  images: string[];
}

const StandardImageList: React.FC<ImageListProps> = ({ images }) => {
  return (
    <ImageList sx={{ width: 500, height: 200 }} cols={3} rowHeight={164}>
      {images.map((item) => (
        <ImageListItem key={item}>
          <img
            src={`${item}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={'Tweet Image'}
            loading='lazy'
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default StandardImageList;
