import { Action } from 'redux';

export enum AppActionsType {
  SET_LOADING_STATUS = 'APPLICATION/SET_LOADING_STATUS',
}

interface SetAppLoadingStatus extends Action<AppActionsType> {
  type: AppActionsType.SET_LOADING_STATUS;
  payload: boolean;
}

export const setAppLoadingAction = (payload: boolean): AppActionsTypes => ({
  type: AppActionsType.SET_LOADING_STATUS,
  payload,
});

export type AppActionsTypes = SetAppLoadingStatus;
