import { initialInputsState } from '../States/initialInputsState';
import { InputState } from '../Types/inputTypes';

import { InputActions } from '../Actions/actionsInputs';

export const inputsReducer = (
  state: InputState = initialInputsState,
  action: any
): InputState => {
  switch (action.type) {
    case InputActions.GET_INPUTS_REQUESTED:
      return {
        ...state,
        error: state.error,
        isLoading: true,
      };
    case InputActions.GET_INPUTS_SUCCEDED:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case InputActions.GET_INPUTS_FAILED:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case InputActions.SEND_INPUTS:
      return {
        ...state,
        data: state.data.concat([action.payload]),
        error: state.error,
        isLoading: false,
      };
    case InputActions.SEND_INPUTS_FAILED:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case InputActions.DELETE_INPUTS:
      return {
        ...state,
        data: state.data.filter((item: any) => item.id !== action.payload),
        error: state.error,
        isLoading: false,
      };
    case InputActions.DELETE_INPUTS_FAILED:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case InputActions.EDIT_INPUTS:
      return {
        ...state,
        data: state.data.map((item: any) =>
          item.id == action.payload.id ? (item = action.payload) : item
        ),
        isLoading: false,
      };
    case InputActions.EDIT_INPUTS_FAILED:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return { ...state };
  }
};
