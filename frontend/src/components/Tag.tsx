import { Typography } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Tag } from '../store/ducks/tags/contracts/state';
import { AccessibleListItem } from './Tags.styled';

export interface TagProps {
  tag: Tag;
}

const Tags: React.FC<TagProps> = ({ tag: { name, count } }: TagProps): React.ReactElement => {
  return (
    <Link to={`/home/search?q=${name}`} style={{ color: 'inherit', textDecoration: 'none' }}>
      <AccessibleListItem>
        <Typography variant='subtitle1'>{name}</Typography>
        <Typography variant='subtitle1'>{count}</Typography>
      </AccessibleListItem>
    </Link>
  );
};

export default Tags;
