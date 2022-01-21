import {Hero} from "../../modules/heroes-module/models/hero";

export interface updateState {
  hero: Hero | null;
  isLoading: boolean;
  error: string | null;
}

export const initialState: updateState = {
  hero: null,
  isLoading: false,
  error: null
}
