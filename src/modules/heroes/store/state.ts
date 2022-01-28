import {Hero} from "../models/hero";

export interface State {
  heroName: string | null;
  hero: Hero | null;
  heroesList: Hero[] | null;
  isLoading: boolean;
  error: string | null;
}

export const initialState = {
  heroName: null,
  hero: null,
  heroesList: null,
  isLoading: false,
  error: null
}

