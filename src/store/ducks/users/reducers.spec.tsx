import React from 'react';
import { LoadingStatus } from '../../types';
import { fetchUsers, setLoadingStatus, setUsers, UsersType } from './actionCreators';
import { usersReducer } from './reducer';

describe('users reducers', () => {
  let state: any;

  beforeEach(() => {
    state = {
      data: undefined,
      userTweets: [],
      status: 'LOADED',
    };
  });
  it('fetchUsers should work correct', () => {
    const action = fetchUsers();
    const newState = usersReducer(state, action);
    expect(newState.status).toBe(LoadingStatus.LOADING);
  });

  it('setUsers should work correct', () => {
    const users: UsersType[] = [
      {
        _id: '6236d5a5b626ed6ecec9d359',
        email: 'test@test.com',
        username: 'test',
        fullname: 'test',
        confirmed: false,
        createdAt: '2022-03-20T07:20:05.390Z',
        updatedAt: '2022-03-20T07:20:05.390Z',
      },
      {
        _id: '623827009a01afb71acfd567',
        email: 'korolvitalik@gmail.com',
        username: 'psyhologitech',
        fullname: 'korolvitalik',
        confirmed: false,
        createdAt: '2022-03-21T07:19:28.173Z',
        updatedAt: '2022-03-21T07:19:28.173Z',
      },
      {
        _id: '6239ff52e061ce592e7c1195',
        email: 'test1@test.com',
        username: 'test1',
        fullname: 'test1',
        confirmed: false,
        createdAt: '2022-03-22T16:54:42.604Z',
        updatedAt: '2022-03-22T16:54:42.604Z',
      },
    ];
    const action = setUsers(users);
    const newState = usersReducer(state, action);
    expect(newState.data?.length).toBe(3);
    expect(newState.data).toMatchObject(users);
  });

  it('setLoadingState should work correct', () => {
    const action = setLoadingStatus(LoadingStatus.LOADED);
    const newState = usersReducer(state, action);
    expect(newState.status).toBe('LOADED');
  });
});
