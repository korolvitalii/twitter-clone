import { Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsTopicsLoaded, selectTopicsItems } from '../../store/ducks/topics/selectors';
import Topic from '../Topic';
import { AccessibleListHeader, AccessibleListWrapper } from './styles';

const Topics: React.FC = (): React.ReactElement | null => {
  const topics = useSelector(selectTopicsItems);
  const isLoaded = useSelector(selectIsTopicsLoaded);

  if (!isLoaded) {
    return null;
  }

  return (
    <AccessibleListWrapper>
      <AccessibleListHeader>
        <Typography variant='h6'>Trends for you</Typography>
      </AccessibleListHeader>
      {topics.map((topic) => (
        <Topic key={topic._id} topic={topic} />
      ))}
    </AccessibleListWrapper>
  );
};

export default Topics;
