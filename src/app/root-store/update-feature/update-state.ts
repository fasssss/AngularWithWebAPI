import {Hero} from "../../models/hero";

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
