import {Actions, UpdateActionsTypes} from "./update-actions"
import {initialState, updateState} from "./update-state";

export function UpdateReducer(state: updateState = initialState, action: Actions){
  switch (action.type) {
    case UpdateActionsTypes.UPDATE_REQUEST:
      return {
        hero: state.hero,
        isLoading: true,
        error: null
      };
    case UpdateActionsTypes.UPDATE_SUCCESS:
      return {
        hero: action.payload.hero,
        isLoading: false,
        error: null
      };
    case UpdateActionsTypes.UPDATE_FAILURE:
      return {
        hero: state.hero,
        isLoading: false,
        error: action.payload.error.error
      }
    default:
      return {
        ...state
      }
  }
}
