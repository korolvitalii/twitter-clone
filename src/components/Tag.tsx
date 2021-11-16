import { Typography } from '@mui/material';
import * as React from 'react';
import { Tag } from '../store/ducks/tags/contracts/state';
import { AccessibleListHeader, AccessibleListItem, AccessibleListWrapper } from './Tags.styled';

export interface TagProps {
  tag: Tag;
}

const Tags: React.FC<TagProps> = ({ tag: { name, count } }: TagProps): React.ReactElement => {
  return (
    <AccessibleListItem>
      <Typography variant='subtitle1'>{name}</Typography>
      <Typography variant='subtitle1'>{count}</Typography>
    </AccessibleListItem>
  );
};

export default Tags;
