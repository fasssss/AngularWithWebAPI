import { createSelector, MemoizedSelector } from '@ngrx/store';
import { PostStoreSelectors } from "./post-feature";
import { DeleteStoreSelectors } from "./delete-feature";
import { UpdateStoreSelectors } from "./update-feature";
import { FetchStoreSelectors } from "./fetch-feature";

export const selectHeroError: MemoizedSelector<object, any> = createSelector(
  PostStoreSelectors.selectPostFailure,
  DeleteStoreSelectors.selectDeleteError,
  UpdateStoreSelectors.selectUpdateFailure,
  FetchStoreSelectors.fetchErrorSelector,
  (postError: any, deleteError: any, updateError: any, fetchError: any) =>{
    return (postError || deleteError || updateError || fetchError);
  }
);

export const selectHeroIsLoading: MemoizedSelector<object, boolean> = createSelector(
  PostStoreSelectors.selectPostIsLoading,
  DeleteStoreSelectors.selectDeleteIsComplete,
  UpdateStoreSelectors.selectUpdateIsLoading,
  FetchStoreSelectors.fetchIsLoadingSelector,
  (postIsLoading: boolean, deleteIsComplete: boolean, updateIsLoading: boolean, fetchIsLoading: boolean) =>{
    return (postIsLoading || !deleteIsComplete || updateIsLoading || fetchIsLoading);
  }
);
