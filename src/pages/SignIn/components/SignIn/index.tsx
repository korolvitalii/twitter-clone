import { yupResolver } from '@hookform/resolvers/yup';
import { Button, FormControl, FormGroup, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import ModalBlock from '../../../../components/ModalBlock';
import { AuthApi } from '../../../../services/api/AuthApi';
import Notification from '../Notification';

interface SignInProps {
  handleClose: () => void;
  isVisible: boolean;
  title: string;
}

interface NoticationStatusInterface {
  text: string;
  handleClose: () => void;
  alertSeverity: 'success' | 'error';
  open: boolean;
}

export interface SignInFormInput {
  email: string;
  password: string;
}

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

const SignIn: React.FC<SignInProps> = ({ isVisible, handleClose, title }): React.ReactElement => {
  // console.log('render!');
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignInFormInput>({
    resolver: yupResolver(schema),
  });

  const [open, setOpen] = useState<boolean>(false);

  const handleCloseNotification = () => {
    console.log('handleCloseNotification');
    setOpen(false);
  };

  const [notifationStatus, setNotificationStatus] = useState<any>({
    text: '',
    handleCloseNotification,
    setOpen,
    alertSeverity: 'error',
  });

  const onSubmit = async (data: any) => {
    try {
      const resp = await AuthApi.authMe(data);
      if (resp.status === 'success') {
        setNotificationStatus({
          text: 'Login success!',
          handleCloseNotification,
          alertSeverity: 'success',
        });
        setOpen(true);
      } else {
        setNotificationStatus({
          text: 'Login failed!',
          handleCloseNotification,
          alertSeverity: 'error',
        });
        setOpen(true);
      }
    } catch {
      setNotificationStatus({
        text: 'Login failed!',
        handleCloseNotification,
        alertSeverity: 'error',
      });
      setOpen(true);
    }
  };

  return (
    <ModalBlock visible={isVisible} title={title} handleClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl component='fieldset' fullWidth>
          <FormGroup aria-label='position'>
            <Controller
              name='email'
              control={control}
              defaultValue=''
              render={({ field }) => (
                <TextField
                  {...field}
                  {...register('email')}
                  autoFocus
                  id='email'
                  label='Email'
                  variant='filled'
                  type='email'
                  InputLabelProps={{ shrink: true }}
                  margin='normal'
                  error={!!errors.email?.message}
                  helperText={errors.email?.message}
                />
              )}
            />
            <Controller
              name='password'
              control={control}
              defaultValue=''
              render={({ field }) => (
                <TextField
                  {...field}
                  {...register('password')}
                  autoFocus
                  id='password'
                  label='Password'
                  variant='filled'
                  type='password'
                  InputLabelProps={{ shrink: true }}
                  margin='normal'
                  error={!!errors.password?.message}
                  helperText={errors.password?.message}
                />
              )}
            />
            <Button type='submit' fullWidth variant='outlined' color='primary'>
              Submit
            </Button>
          </FormGroup>
          <Notification {...notifationStatus} open={open} />
        </FormControl>
      </form>
    </ModalBlock>
  );
};

export default SignIn;
