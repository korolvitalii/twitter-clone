import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';

import {
  Avatar,
  Button,
  FormControl,
  FormGroup,
  IconButton,
  Stack,
  TextField,
} from '@mui/material';

import {
  fetchUserData,
  setLoadingStatus,
  updateUserData,
} from '../../store/ducks/user/actionCreators';
import { LoadingStatus, UserInterface } from '../../store/types';
import ModalBlock from '../ModalBlock';
import { AvatarBlock } from './styles';
import { updateImages } from '../../utils/updateImages';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';

interface EditProfileDataModalProps {
  handleClose: () => void;
  isVisible: boolean;
  title: string;
  user: UserInterface | undefined;
}
export interface LoginFormData {
  username: string;
  fullname: string;
  bigAvatar: FileList;
  smallAvatar: FileList;
}

const schema = yup
  .object({
    username: yup.string().required(),
    fullname: yup.string().required(),
  })
  .required();
interface AvatarObjInterface {
  imgUrl?: string;
  file?: File;
}
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
  const [bigAvatar, setBigAvatar] = useState<AvatarObjInterface>({
    imgUrl: undefined,
    file: undefined,
  });
  const [smallAvatar, setSmallAvatar] = useState<AvatarObjInterface>({
    imgUrl: undefined,
    file: undefined,
  });

  const onSubmit = async (data: LoginFormData) => {
    dispatch(setLoadingStatus(LoadingStatus.LOADING));
    let uploadedBigAvatar;
    let uploadedSmallAvatar;
    if (bigAvatar.file) {
      uploadedBigAvatar = await updateImages(bigAvatar?.file);
    }
    if (smallAvatar.file) {
      uploadedSmallAvatar = await updateImages(smallAvatar?.file);
    }
    debugger;
    dispatch(
      updateUserData({
        ...data,
        bigAvatar: uploadedBigAvatar?.url,
        smallAvatar: uploadedSmallAvatar?.url,
      }),
    );
    dispatch(fetchUserData());

    return () => {
      handleClose();
    };
  };

  const onChangeBigAvatarInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const fileObj = new Blob([file]);
      setBigAvatar({ ...bigAvatar, file, imgUrl: URL.createObjectURL(fileObj) });
    }
  };

  const onChangeSmallAvatarInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const fileObj = new Blob([file]);
      setSmallAvatar({ ...smallAvatar, file, imgUrl: URL.createObjectURL(fileObj) });
    }
  };

  useEffect(() => {
    navigate(`/profile/${user?._id}`);
  }, [user]);

  return (
    <div>
      <ModalBlock visible={isVisible} title={title} handleClose={handleClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl component='fieldset' fullWidth>
            <FormGroup aria-label='position'>
              <AvatarBlock>
                {bigAvatar.imgUrl ? (
                  <Avatar src={bigAvatar.imgUrl} className='bigAvatar' variant='square' />
                ) : (
                  <Avatar className='bigAvatar' variant='square'>
                    <label htmlFor='fileBigAvatar'>
                      <IconButton component='span'>
                        <CameraAltOutlinedIcon className='colorWhite' />
                      </IconButton>
                    </label>
                    <input
                      {...register('bigAvatar')}
                      style={{ display: 'none' }}
                      type='file'
                      name='bigAvatar'
                      id='fileBigAvatar'
                      onChange={onChangeBigAvatarInput}
                    />
                  </Avatar>
                )}
                {smallAvatar.imgUrl ? (
                  <Avatar src={smallAvatar.imgUrl} className='smallAvatar' />
                ) : (
                  <Avatar className='smallAvatar'>
                    <label htmlFor='fileSmallAvatar'>
                      <IconButton component='span'>
                        <CameraAltOutlinedIcon className='colorWhite' />
                      </IconButton>
                    </label>
                    <input
                      {...register('smallAvatar')}
                      style={{ display: 'none' }}
                      type='file'
                      name='smallAvatar'
                      id='fileSmallAvatar'
                      onChange={onChangeSmallAvatarInput}
                    />
                  </Avatar>
                )}
              </AvatarBlock>
              <Controller
                name='username'
                control={control}
                defaultValue={user?.username}
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
                defaultValue={user?.fullname}
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
// {
//   "bigAvatar": {
//       "0": {}
//   },
//   "smallAvatar": {
//       "0": {}
//   },
//   "username": "testtest",
//   "fullname": "testtest"
// }
