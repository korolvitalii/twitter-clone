import { Typography } from '@mui/material';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { TopicInterface } from '../../store/ducks/topics/contracts/state';
import { AccessibleListItem } from '../Topics/styles';

export interface TagProps {
  topic: TopicInterface;
}

const Topic: React.FC<TagProps> = ({
  topic: { topicName, content },
}: TagProps): React.ReactElement => {
  return (
    <Link to={`/home/search?q=${topicName}`} style={{ color: 'inherit', textDecoration: 'none' }}>
      <AccessibleListItem>
        <Typography variant='caption' sx={{ color: 'gray' }}>
          {topicName}
        </Typography>
        <Typography variant='subtitle1'>{content}</Typography>
        <Typography variant='caption' sx={{ color: 'gray' }}>
          1,887 Tweets
        </Typography>
      </AccessibleListItem>
    </Link>
  );
};

export default Topic;
