import { yupResolver } from '@hookform/resolvers/yup';
import { Button, FormControl, FormGroup, TextField } from '@mui/material';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';
import ModalBlock from '../../../../components/ModalBlock';
import { fetchSignIn } from '../../../../store/ducks/user/actionCreators';
import { selectUserStatus } from '../../../../store/ducks/user/selectors';
import { LoadingStatus } from '../../../../store/types';
import Notification from '../Notification';

interface SignInProps {
  handleClose: () => void;
  isVisible: boolean;
  title: string;
}

interface NoticationStatusInterface {
  text: string;
  handleCloseNotification: () => void;
  alertSeverity: 'success' | 'error';
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

export interface LoginFormData {
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
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(schema),
  });

  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const handleCloseNotification = () => {
    setOpen(false);
  };
  const userLoadingStatus = useSelector(selectUserStatus);

  const [notifationStatus, setNotificationStatus] = useState<NoticationStatusInterface>({
    text: '',
    handleCloseNotification,
    setOpen,
    alertSeverity: 'error',
  });

  const onSubmit = async (data: LoginFormData) => {
    dispatch(fetchSignIn(data));
    handleClose();
  };

  useEffect(() => {
    if (userLoadingStatus === LoadingStatus.SUCCESS) {
      setNotificationStatus({
        text: 'Login success!',
        handleCloseNotification,
        alertSeverity: 'success',
      });
      setOpen(true);
    } else if (userLoadingStatus === LoadingStatus.ERROR) {
      setNotificationStatus({
        text: 'Login failed!',
        handleCloseNotification,
        alertSeverity: 'error',
      });
      setOpen(true);
    } else {
      return;
    }
  }, [userLoadingStatus]);

  return (
    <>
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
          </FormControl>
        </form>
      </ModalBlock>
      <Notification {...notifationStatus} open={open} />
    </>
  );
};

export default SignIn;
