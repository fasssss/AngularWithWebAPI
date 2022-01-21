import {Actions, DeleteActionsTypes} from "./delete-actions";
import {deleteState, initialState} from "./delete-state";

export function deleteReducer(state: deleteState = initialState, action: Actions){
  switch (action.type){
    case DeleteActionsTypes.DELETE_REQUEST:
      return {
        heroName: action.payload.name,
        isComplete: false,
        error: null
      };
    case DeleteActionsTypes.DELETE_SUCCESS:
      return {
        heroName: null,
        isComplete: true,
        error: null
      };
    case DeleteActionsTypes.DELETE_FAILURE:
      return {
        heroName: state.heroName,
        isComplete: false,
        error: action.payload.error
      };
    default:
      return {
        ...state
      };
  }
}
