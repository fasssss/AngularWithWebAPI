import {Hero} from "../../modules/heroes-module/models/hero";

export interface postState {
  hero: Hero | null;
  isLoading: boolean;
  error: string | null;
}

export const initialState: postState = {
  hero: null,
  isLoading: false,
  error: null
}
