import { Typography } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { TopicInterface } from '../../store/ducks/topics/contracts/state';
import { AccessibleListItem } from '../Topics/styles';

export interface TagProps {
  topic: TopicInterface;
}

const Topic: React.FC<TagProps> = ({ topic: { name, count } }: TagProps): React.ReactElement => {
  return (
    <Link to={`/home/search?q=${name}`} style={{ color: 'inherit', textDecoration: 'none' }}>
      <AccessibleListItem>
        <Typography variant='subtitle1'>{name}</Typography>
        <Typography variant='subtitle1'>{count}</Typography>
      </AccessibleListItem>
    </Link>
  );
};

export default Topic;
