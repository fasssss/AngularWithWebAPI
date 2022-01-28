import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from "@ngrx/store";

import { Hero } from "../../models/hero";
import { deleteState } from "./delete-state";

const getHeroName = (state: deleteState) => state.heroName;
const getIsComplete = (state: deleteState) => state.isComplete;
const getError = (state: deleteState) => state.error;

export const selectDeleteState: MemoizedSelector<object, deleteState> =
  createFeatureSelector("delete");

export const selectDeleteName: MemoizedSelector<object, any> =
  createSelector(selectDeleteState, getHeroName);
export const selectDeleteIsComplete: MemoizedSelector<object, boolean> =
  createSelector(selectDeleteState, getIsComplete);
export const selectDeleteError: MemoizedSelector<object, any> =
  createSelector(selectDeleteState, getError);
