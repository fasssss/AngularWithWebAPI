import { createSelector, MemoizedSelector } from '@ngrx/store';
import { PostStoreSelectors } from "./post-feature";
import { DeleteStoreSelectors } from "./delete-feature";

export const selectRootError: MemoizedSelector<object, any> = createSelector(
  PostStoreSelectors.selectPostFailure,
  DeleteStoreSelectors.selectDeleteError,
  (postError: any, deleteError: any) =>{
    return (postError || deleteError);
  }
);

export const selectRootIsLoading: MemoizedSelector<object, boolean> = createSelector(
  PostStoreSelectors.selectPostIsLoading,
  DeleteStoreSelectors.selectDeleteIsComplete,
  (postIsLoading: boolean, deleteIsComplete: boolean) =>{
    return (postIsLoading || !deleteIsComplete);
  }
);
