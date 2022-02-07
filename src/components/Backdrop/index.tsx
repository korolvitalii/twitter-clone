import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';

interface BackdropPropInterface {
  open: boolean;
  handleClose: () => void;
  children?: JSX.Element | JSX.Element[];
}

const SimpleBackdrop: React.FC<BackdropPropInterface> = ({
  open,
  handleClose,
  children,
}: BackdropPropInterface) => {
  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 2 }}
        open={open}
        onClick={handleClose}>
        Hello
      </Backdrop>
    </div>
  );
};

export default SimpleBackdrop;
