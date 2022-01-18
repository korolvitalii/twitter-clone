import { yupResolver } from '@hookform/resolvers/yup';
import { Button, FormControl, FormGroup, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import * as yup from 'yup';
import { fetchUserData, updateUserData } from '../../store/ducks/user/actionCreators';
import { UserInterface } from '../../store/types';
import ModalBlock from '../ModalBlock';

interface EditProfileDataModalProps {
  handleClose: () => void;
  isVisible: boolean;
  title: string;
  user: UserInterface | undefined;
}
export interface LoginFormData {
  username: string;
  fullname: string;
}

const schema = yup
  .object({
    username: yup.string().required(),
    fullname: yup.string().required(),
  })
  .required();

const EditProfileDataModal: React.FC<EditProfileDataModalProps> = ({
  isVisible,
  handleClose,
  title,
  user,
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
  const navigate = useNavigate();
  const onSubmit = async (data: LoginFormData) => {
    dispatch(updateUserData(data));
    dispatch(fetchUserData());

    return () => {
      handleClose();
    };
  };

  useEffect(() => {
    navigate('/profile');
  }, [user]);

  return (
    <div>
      <ModalBlock visible={isVisible} title={title} handleClose={handleClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl component='fieldset' fullWidth>
            <FormGroup aria-label='position'>
              <Controller
                name='username'
                control={control}
                defaultValue=''
                render={({ field }) => (
                  <TextField
                    {...field}
                    {...register('username')}
                    autoFocus
                    id='email'
                    label='Nickname'
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
                name='fullname'
                control={control}
                defaultValue=''
                render={({ field }) => (
                  <TextField
                    {...field}
                    {...register('fullname')}
                    autoFocus
                    id='fullname'
                    label='Name'
                    variant='filled'
                    InputLabelProps={{ shrink: true }}
                    margin='normal'
                    type='string'
                    error={!!errors.fullname?.message}
                    helperText={errors.fullname?.message}
                  />
                )}
              />
              <Button type='submit' variant='outlined' color='primary'>
                Save
              </Button>
            </FormGroup>
          </FormControl>
        </form>
      </ModalBlock>
    </div>
  );
};

export default EditProfileDataModal;
