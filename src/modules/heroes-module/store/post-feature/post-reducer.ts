import {Actions, PostActionsTypes} from "./post-actions"
import {initialState, postState} from "./post-state";

export function PostReducer(state: postState = initialState, action: Actions){
  switch (action.type) {
    case PostActionsTypes.POST_REQUEST:
      return {
        hero: state.hero,
        isLoading: true,
        error: null
      };
    case PostActionsTypes.POST_SUCCESS:
      return {
        hero: action.payload.hero,
        isLoading: false,
        error: null
      };
    case PostActionsTypes.POST_FAILURE:
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
