import {Actions, FetchActionsTypes} from "./fetch-actions";
import {fetchState, InitialState} from "./fetch-state";

export function fetchReducer(state: fetchState = InitialState, action: Actions){
  switch (action.type){
    case FetchActionsTypes.FETCH_REQUEST:
      return{
        heroesList: state.heroesList,
        isLoading: true,
        error: null,
      }
    case FetchActionsTypes.FETCH_SUCCESS:
      return {
        heroesList: action.payload.result,
        isLoading: false,
        error: null,
      }
    case FetchActionsTypes.FETCH_FAILURE:
      return {
        heroesList: state.heroesList,
        isLoading: false,
        error: action.payload.error
      }
    default:
      return {...state}
  }
}
