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
}: BackdropPropInterface): React.ReactElement => {
  console.log(`SimpleBackdrop ${children}`);
  return (
    <div>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 2 }}
        open={open}
        onClick={handleClose}>
        {/* {children} */}
        Hello
      </Backdrop>
    </div>
  );
};

export default SimpleBackdrop;
