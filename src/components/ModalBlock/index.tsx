import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';
import * as React from 'react';
import { SignInUseStyles } from '../../Pages/SignIn';

interface ModalBlockProps {
  title: string;
  children: React.ReactNode;
  visible?: boolean;
  handleClose: () => void;
  classes: ReturnType<typeof SignInUseStyles>;
}

const ModalBlock: React.FC<ModalBlockProps> = ({
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
        className={classes.loginSideTitle}
        sx={{ paddingLeft: '30px' }}
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
