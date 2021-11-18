import { Link, Typography } from '@mui/material';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { TagsState } from '../store/ducks/tags/contracts/state';
import { selectIsTagsLoaded, selectTagsItems } from '../store/ducks/tags/selectors';
import Tag from './Tag';
import { AccessibleListHeader, AccessibleListWrapper } from './Tags.styled';

const Tags: React.FC = (): React.ReactElement | null => {
  const tags = useSelector(selectTagsItems);
  const isLoaded = useSelector(selectIsTagsLoaded);

  if (!isLoaded) {
    return null;
  }

  return (
    <AccessibleListWrapper>
      <AccessibleListHeader>
        <Typography variant='h6'>Trends for you</Typography>
      </AccessibleListHeader>
      {tags.map((tag) => (
        <Tag key={tag._id} tag={tag} />
      ))}
    </AccessibleListWrapper>
  );
};

export default Tags;
