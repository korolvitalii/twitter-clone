import { takeEvery } from 'redux-saga/effects';
import { UsersActionsType } from './actionTypes';
import { fetchUsersRequest, usersSaga } from './sagas';
import { UsersApi } from '../../../services/api/UserApi';
import { runSaga } from 'redux-saga';
import { setLoadingStatus, setUsers } from './actionCreators';
import { LoadingStatus } from '../../types';

describe('fetchAuthorsFromApi', () => {
  const genObject = usersSaga();

  it('should wait for every FETCH_SIGN_IN action and call fetchUsersRequest', () => {
    expect(genObject.next().value).toEqual(
      takeEvery(UsersActionsType.FETCH_USERS, fetchUsersRequest),
    );
  });

  it('should be done on next iteration', () => {
    expect(genObject.next().done).toBeTruthy();
  });
});

describe('makeAuthorsApiRequest', () => {
  it('should call api and dispatch success action', async () => {
    const fetchUsersResponse = {
      data: [
        {
          _id: '6236d5a5b626ed6ecec9d359',
          email: 'test@test.com',
          username: 'test',
          fullname: 'test',
          confirmed: false,
          createdAt: '2022-03-20T07:20:05.390Z',
          updatedAt: '2022-03-20T07:20:05.390Z',
          __v: 0,
        },
      ],
    };
    const request = jest
      .spyOn(UsersApi, 'fetchUsers')
      .mockImplementation(() => Promise.resolve(fetchUsersResponse.data));
    const dispatched: any[] = [];
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      //@ts-ignore
      fetchUsersRequest,
    );
    expect(request).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([setUsers(fetchUsersResponse.data)]);
    request.mockClear();
  });

  it('should call api and dispatch error action', async () => {
    const request = jest.spyOn(UsersApi, 'fetchUsers').mockImplementation(() => Promise.reject());
    const dispatched: any[] = [];
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      //@ts-ignore
      fetchUsersRequest,
    );

    expect(request).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([setLoadingStatus(LoadingStatus.ERROR)]);
    request.mockClear();
  });
});
