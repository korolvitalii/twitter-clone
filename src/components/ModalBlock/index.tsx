import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogContent, IconButton } from '@mui/material';
import * as React from 'react';
import { DialogTitleWrapper } from '../../pages/SignIn/components/SignInModal/styles';

interface ModalBlockProps {
  title?: string;
  children: React.ReactNode;
  visible?: boolean;
  handleClose: () => void;
}

const ModalBlock: React.FC<ModalBlockProps> = ({
  title,
  children,
  visible = false,
  handleClose,
}): React.ReactElement | null => {
  if (!visible) {
    return null;
  }
  return (
    <Dialog open={visible} onClose={handleClose}>
      <DialogTitleWrapper id='form-dialog-title'>
        {title}
        <IconButton onClick={handleClose}>
          <CloseIcon className='close-icon' color='primary' />
        </IconButton>
      </DialogTitleWrapper>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default ModalBlock;
