import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';
import { Hero } from "../../modules/heroes-module/models/hero";
import { updateState } from "./update-state";

const getError = (state: updateState): any => state.error;
const getIsLoading = (state: updateState): boolean => state.isLoading;
const getHero = (state: updateState): any => state.hero;

export const selectUpdateState: MemoizedSelector<object, updateState> = createFeatureSelector<updateState>("update");

export const selectUpdateFailure: MemoizedSelector<object, any> = createSelector(selectUpdateState, getError);
export const selectUpdateIsLoading: MemoizedSelector<object, boolean> = createSelector(selectUpdateState, getIsLoading);
export const selectUpdateHero: MemoizedSelector<object, any> = createSelector(selectUpdateState, getHero);
