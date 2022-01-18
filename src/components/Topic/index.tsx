import React from 'react';
import { Link } from 'react-router-dom';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { IconButton, Typography } from '@mui/material';
import { TopicInterface } from '../../store/ducks/topics/contracts/state';
import { Wrapper } from './styles';
import CustomPopover from '../Popover';
export interface TagProps {
  topic: TopicInterface;
}

const Topic: React.FC<TagProps> = ({
  topic: { topicName, content },
}: TagProps): React.ReactElement => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const options = ['Interested', 'Not interested'];

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Wrapper>
      <div className='listItems'>
        <div>
          <Link to={`/home/search?q=${topicName}`} className='link'>
            <Typography variant='caption' className='item'>
              {topicName}
            </Typography>
            <Typography variant='subtitle1'>{content}</Typography>
            <Typography variant='caption' className='item'>
              1,887 Tweets
            </Typography>
          </Link>
        </div>
        <CustomPopover handleClose={handleClose} open={open} anchorEl={anchorEl} options={options}>
          <IconButton className='iconbutton' onClick={handleClick}>
            <MoreHorizIcon />
          </IconButton>
        </CustomPopover>
      </div>
    </Wrapper>
  );
};

export default Topic;
