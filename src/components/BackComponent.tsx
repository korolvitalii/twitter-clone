import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BackComponent = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate(-1);

  return (
    <IconButton onClick={handleClick}>
      <ArrowBackIcon color='primary' />
    </IconButton>
  );
};

export default BackComponent;
