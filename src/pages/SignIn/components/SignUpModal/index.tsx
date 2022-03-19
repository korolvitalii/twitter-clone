import { yupResolver } from '@hookform/resolvers/yup';
import { Button, FormControl, FormGroup, TextField } from '@mui/material';
import React, { Dispatch, SetStateAction } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import ModalBlock from '../../../../components/ModalBlock';
import { fetchSignIn, fetchSignUp } from '../../../../store/ducks/user/actionCreators';

export interface NotificationStatusInterface {
  text: string;
  handleCloseNotification: () => void;
  alertSeverity: 'success' | 'error';
  setOpen?: Dispatch<SetStateAction<boolean>>;
}

interface SignUpModalProps {
  handleClose: () => void;
  isVisible: boolean;
  title: string;
}

export interface RegistrationFormData {
  email: string;
  fullname: string;
  username: string;
  password: string;
  password2: string;
}

const schema = yup
  .object({
    email: yup.string().email().required('email is required'),
    fullname: yup.string().required('fullname is required'),
    username: yup.string().required('username is required'),
    password: yup.string().required('password is required'),
    password2: yup.string().oneOf([yup.ref('password')], 'Passwords must match'),
  })
  .required();

const SignUpModal: React.FC<SignUpModalProps> = ({
  isVisible,
  handleClose,
  title,
}): React.ReactElement => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: yupResolver(schema),
  });

  const dispatch = useDispatch();

  const onSubmit = async (data: RegistrationFormData) => {
    dispatch(fetchSignUp(data));
    dispatch(fetchSignIn({ email: data.email, password: data.password }));
    return () => {
      handleClose();
    };
  };

  return (
    <>
      <ModalBlock visible={isVisible} title={title} handleClose={handleClose}>
        <form onSubmit={handleSubmit(onSubmit)} data-testid='signUpModal'>
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
                name='fullname'
                control={control}
                defaultValue=''
                render={({ field }) => (
                  <TextField
                    {...field}
                    {...register('fullname')}
                    autoFocus
                    id='fullname'
                    label='Fullname'
                    variant='filled'
                    type='string'
                    InputLabelProps={{ shrink: true }}
                    margin='normal'
                    error={!!errors.fullname?.message}
                    helperText={errors.fullname?.message}
                  />
                )}
              />
              <Controller
                name='username'
                control={control}
                defaultValue=''
                render={({ field }) => (
                  <TextField
                    {...field}
                    {...register('username')}
                    autoFocus
                    id='username'
                    label='Username'
                    variant='filled'
                    type='string'
                    InputLabelProps={{ shrink: true }}
                    margin='normal'
                    error={!!errors.username?.message}
                    helperText={errors.username?.message}
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
              <Controller
                name='password2'
                control={control}
                defaultValue=''
                render={({ field }) => (
                  <TextField
                    {...field}
                    {...register('password2')}
                    autoFocus
                    id='password2'
                    label='Confirm password'
                    variant='filled'
                    type='password'
                    InputLabelProps={{ shrink: true }}
                    margin='normal'
                    error={!!errors.password2?.message}
                    helperText={errors.password2?.message}
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
    </>
  );
};

export default SignUpModal;
