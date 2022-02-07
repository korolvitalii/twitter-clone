import React from 'react';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { Button, FormControl, FormGroup, TextField } from '@mui/material';
import ModalBlock from '../../../../components/ModalBlock';
import { fetchSignIn } from '../../../../store/ducks/user/actionCreators';

interface SignInProps {
  handleClose: () => void;
  isVisible: boolean;
  title: string;
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

const SignInModal: React.FC<SignInProps> = ({
  isVisible,
  handleClose,
  title,
}): React.ReactElement => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch();
  const onSubmit = async (data: LoginFormData) => {
    dispatch(fetchSignIn(data));
    return () => {
      handleClose();
    };
  };

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
    </>
  );
};

export default SignInModal;
