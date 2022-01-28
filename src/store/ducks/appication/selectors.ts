import { AppStateType } from '../../rootReducer';

export const selectLoadingStatus = (state: AppStateType): boolean => state.appication.loadingStatus;
