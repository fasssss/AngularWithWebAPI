import {State, initialState} from "./state";
import {Actions, ActionsTypes} from "./actions";

export function Reducer(state: State = initialState, action: Actions){

  switch (action.type){
    case ActionsTypes.DELETE_REQUEST:
      return {
        ...state,
        heroName: action.payload.name,
        isLoading: true,
        error: null
      };
    case ActionsTypes.DELETE_SUCCESS:
      return {
        ...state,
        heroName: null,
        isLoading: false,
        error: null
      };
    case ActionsTypes.DELETE_FAILURE:
      return {
        ...state,
        heroName: state.heroName,
        isLoading: false,
        error: action.payload.error
      };
    case ActionsTypes.FETCH_REQUEST:
      return{
        ...state,
        heroesList: state.heroesList,
        isLoading: true,
        error: null,
      }
    case ActionsTypes.FETCH_SUCCESS:
      return {
        ...state,
        heroesList: action.payload.result,
        isLoading: false,
        error: null,
      }
    case ActionsTypes.FETCH_FAILURE:
      return {
        ...state,
        heroesList: state.heroesList,
        isLoading: false,
        error: action.payload.error
      }
    case ActionsTypes.POST_REQUEST:
      return {
        ...state,
        hero: state.hero,
        isLoading: true,
        error: null
      };
    case ActionsTypes.POST_SUCCESS:
      return {
        ...state,
        hero: action.payload.hero,
        isLoading: false,
        error: null
      };
    case ActionsTypes.POST_FAILURE:
      return {
        ...state,
        hero: state.hero,
        isLoading: false,
        error: action.payload.error.error
      }
    case ActionsTypes.UPDATE_REQUEST:
      return {
        ...state,
        hero: state.hero,
        isLoading: true,
        error: null
      };
    case ActionsTypes.UPDATE_SUCCESS:
      return {
        ...state,
        hero: action.payload.hero,
        isLoading: false,
        error: null
      };
    case ActionsTypes.UPDATE_FAILURE:
      return {
        ...state,
        hero: state.hero,
        isLoading: false,
        error: action.payload.error.error
      }

    default:
      return {
        ...state
      };
  }
}
