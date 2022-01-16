import React from 'react';
import { Link } from 'react-router-dom';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton, Typography } from '@mui/material';
import { TopicInterface } from '../../store/ducks/topics/contracts/state';
import { AccessibleListItem } from '../Topics/styles';
export interface TagProps {
  topic: TopicInterface;
}

const Topic: React.FC<TagProps> = ({
  topic: { topicName, content },
}: TagProps): React.ReactElement => {
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Link to={`/home/search?q=${topicName}`} style={{ color: 'inherit', textDecoration: 'none' }}>
      <AccessibleListItem>
        <div>
          <Typography variant='caption' sx={{ color: 'gray' }}>
            {topicName}
          </Typography>
          <Typography variant='subtitle1'>{content}</Typography>
          <Typography variant='caption' sx={{ color: 'gray' }}>
            1,887 Tweets
          </Typography>
        </div>
        <IconButton onClick={handleClick}>
          <MoreHorizIcon />
        </IconButton>
      </AccessibleListItem>
    </Link>
  );
};

export default Topic;
