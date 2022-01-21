import {Hero} from "../../modules/heroes-module/models/hero";

export interface fetchState {
  heroesList: Array<Hero> | null,
  isLoading: boolean,
  error: string | null,
}

export const InitialState = {
  heroesList: null,
  isLoading: false,
  error: null,
}
