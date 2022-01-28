import produce, { Draft } from 'immer';
import { AppActionsType, AppActionsTypes } from './actionCreators';
import { AppStateInterface } from './contracts/state';

const initialState: AppStateInterface = {
  loadingStatus: false,
};

export const appicationReducer = produce(
  (draft: Draft<AppStateInterface>, actions: AppActionsTypes) => {
    switch (actions.type) {
      case AppActionsType.SET_LOADING_STATUS: {
        draft.loadingStatus = actions.payload;
        break;
      }
      default: {
        return draft;
      }
    }
  },
  initialState,
);
