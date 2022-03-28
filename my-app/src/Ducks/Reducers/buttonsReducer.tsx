import { initialButtonsState } from '../States/initialButtonsState';
import { ButtonState } from '../Types/buttonTypes';

import { ButtonActions } from '../Actions/actionsButtons';

export const buttonsReducer = (
  state: ButtonState = initialButtonsState,
  action: any
): ButtonState => {
  switch (action.type) {
    case ButtonActions.GET_BUTTONS_REQUESTED:
      return {
        ...state,
        error: state.error,
        isLoading: true,
      };
    case ButtonActions.GET_BUTTONS_SUCCEDED:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };

    case ButtonActions.GET_BUTTONS_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case ButtonActions.SEND_BUTTONS:
      return {
        ...state,
        data: state.data.concat([action.payload]),
        error: state.error,
        isLoading: false,
      };
    case ButtonActions.SEND_BUTTONS_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case ButtonActions.DELETE_BUTTONS:
      return {
        ...state,
        data: state.data.filter((item: any) => item.id !== action.payload),
        error: state.error,
        isLoading: false,
      };
    case ButtonActions.DELETE_BUTTONS_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case ButtonActions.EDIT_BUTTONS:
      return {
        ...state,
        data: state.data.map((item: any) =>
          item.id == action.payload.id ? (item = action.payload) : item
        ),
        isLoading: false,
      };
    case ButtonActions.EDIT_BUTTONS_FAILED:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return { ...state };
  }
};
