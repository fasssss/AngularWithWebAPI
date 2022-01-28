import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';
import {State} from "./state";

const getHeroName = (state: State) => state.heroName;
const getHero = (state: State) => state.hero;
const getHeroesList = (state: State) => state.heroesList;
const getIsLoading = (state: State) => state.isLoading;
const getError = (state: State) => state.error;

export const selectState: MemoizedSelector<object, State> =
  createFeatureSelector("heroes");

export const selectHeroName: MemoizedSelector<object, any> =
  createSelector(selectState, getHeroName);
export const selectHero: MemoizedSelector<object, any> =
  createSelector(selectState, getHero);
export const selectHeroesList: MemoizedSelector<object, any> =
  createSelector(selectState, getHeroesList);
export const selectIsLoading: MemoizedSelector<object, any> =
  createSelector(selectState, getIsLoading);
export const selectError: MemoizedSelector<object, any> =
  createSelector(selectState, getError);
