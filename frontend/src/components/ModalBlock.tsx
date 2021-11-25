import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import * as React from 'react';
import { SignInUseStyles } from '../Pages/SignIn/SignIn';

interface ModalBlockProps {
  size?: number;
  title?: string;
  children: React.ReactNode;
  visible?: boolean;
  handleClose: () => void;
  classes?: ReturnType<typeof SignInUseStyles>;
}

const ModalBlock: React.FC<ModalBlockProps> = ({
  size,
  title,
  children,
  visible = false,
  handleClose,
  classes,
}): React.ReactElement | null => {
  if (!visible) {
    return null;
  }
  return (
    <Dialog open={visible} onClose={handleClose}>
      <DialogTitle
        className={classes ? classes.loginSideTitle : 'asdsaasd'}
        sx={{ paddingLeft: '30px', width: size }}
        id='form-dialog-title'>
        {title}
        <IconButton onClick={handleClose}>
          <CloseIcon sx={{ fontSize: 26 }} color='primary' />
        </IconButton>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default ModalBlock;
