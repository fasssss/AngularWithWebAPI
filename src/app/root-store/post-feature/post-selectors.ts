import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';
import { Hero } from "../../models/hero";
import { postState } from "./post-state";

const getError = (state: postState): any => state.error;
const getIsLoading = (state: postState): boolean => state.isLoading;
const getHero = (state: postState): any => state.hero;

export const selectPostState: MemoizedSelector<object, postState> = createFeatureSelector<postState>("post");

export const selectPostFailure: MemoizedSelector<object, any> = createSelector(selectPostState, getError);
export const selectPostIsLoading: MemoizedSelector<object, boolean> = createSelector(selectPostState, getIsLoading);
export const selectPostHero: MemoizedSelector<object, any> = createSelector(selectPostState, getHero);
