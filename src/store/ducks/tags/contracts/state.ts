export enum LoadingState {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
}

export interface Tag {
  name: string;
  count: number;
}

export interface TagsState {
  items: Tag[];
  loadingState: LoadingState;
}
