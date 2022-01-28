import { createSelector, MemoizedSelector } from '@ngrx/store';
import {HeroesStoreSelector} from "../heroes/store";

export const selectRootError: MemoizedSelector<object, any> = createSelector(
  HeroesStoreSelector.selectError,
  (Error: any) =>{
    return (Error);
  }
);

export const selectRootIsLoading: MemoizedSelector<object, boolean> = createSelector(
  HeroesStoreSelector.selectIsLoading,
  (IsLoading: boolean) =>{
    return (IsLoading);
  }
);
