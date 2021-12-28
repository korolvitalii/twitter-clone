import Alert from '@mui/material/Alert/Alert';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar/Snackbar';
import React from 'react';

interface NotificationProps {
  text: string;
  handleCloseNotification: () => void;
  alertSeverity: 'error' | 'success';
  open: boolean;
}

const Notification: React.FC<NotificationProps> = ({
  text,
  handleCloseNotification,
  alertSeverity,
  open,
}): React.ReactElement => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleCloseNotification}>
      <Alert onClose={handleCloseNotification} severity={alertSeverity}>
        {text}
        <IconButton
          aria-label='close'
          color='inherit'
          sx={{ p: 0.5 }}
          onClick={handleCloseNotification}></IconButton>
      </Alert>
    </Snackbar>
  );
};

export default Notification;
