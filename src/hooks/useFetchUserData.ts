import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchUserData } from '../store/ducks/user/actionCreators';
import { selectIsAuth, selectUserStatus } from '../store/ducks/user/selectors';
import { LoadingStatus } from '../store/types';

export const useFetchUserData = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuth = useSelector(selectIsAuth);
  const loadingStatus = useSelector(selectUserStatus);
  const isReady = loadingStatus !== LoadingStatus.NEVER && loadingStatus !== LoadingStatus.LOADING;

  useEffect(() => {
    dispatch(fetchUserData());
  }, [dispatch]);

  useEffect(() => {
    if (isReady && !isAuth) {
      navigate('/signin');
    } else {
      navigate('/home');
    }
  }, [isAuth, isReady]);
  return {
    isReady,
    isAuth,
  };
};
