import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface BackComponentPropsInterface {
  count: number;
}

const BackComponent: React.FC<BackComponentPropsInterface> = ({ count }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate(-count);
  console.log(navigate);

  return (
    <IconButton onClick={handleClick}>
      <ArrowBackIcon color='primary' />
    </IconButton>
  );
};

export default BackComponent;
