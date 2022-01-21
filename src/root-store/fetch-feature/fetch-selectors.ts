import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';
import { Hero } from "../../modules/heroes-module/models/hero";
import { fetchState } from "./fetch-state";

const getHeroesList = (state: fetchState): Array<Hero> | null => state.heroesList;
const getIsLoading = (state: fetchState): boolean => state.isLoading;
const getError = (state: fetchState): string | null => state.error;

export const fetchFeatureSelector:MemoizedSelector<object, fetchState> =
  createFeatureSelector<fetchState>("fetch");

export const fetchHeroesListSelector: MemoizedSelector<object, Array<Hero> | null> =
  createSelector(fetchFeatureSelector, getHeroesList);
export const fetchIsLoadingSelector: MemoizedSelector<object, boolean> =
  createSelector(fetchFeatureSelector, getIsLoading);
export const fetchErrorSelector: MemoizedSelector<object, string | null> =
  createSelector(fetchFeatureSelector, getError);
