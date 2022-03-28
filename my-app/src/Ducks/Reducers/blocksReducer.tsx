import { initialBlocksState } from '../States/initialBlocksState';
import { BlockState } from '../Types/blockTypes';

import { BlockActions } from '../Actions/actionsBlocks';

export const blocksReducer = (
  state: BlockState = initialBlocksState,
  action: any
): BlockState => {
  switch (action.type) {
    case BlockActions.GET_BLOCKS_REQUESTED:
      return {
        ...state,
        error: state.error,
        isLoading: true,
      };
    case BlockActions.GET_BLOCKS_SUCCEDED:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };
    case BlockActions.GET_BLOCKS_FAILED:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case BlockActions.SEND_BLOCKS:
      return {
        ...state,
        data: state.data.concat([action.payload]),
        error: state.error,
        isLoading: false,
      };
    case BlockActions.SEND_BLOCKS_FAILED:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case BlockActions.DELETE_BLOCKS:
      return {
        ...state,
        data: state.data.filter((item: any) => item.id !== action.payload),
        error: state.error,
        isLoading: false,
      };
    case BlockActions.DELETE_BLOCKS_FAILED:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case BlockActions.EDIT_BLOCKS:
      return {
        ...state,
        data: state.data.map((item: any) =>
          item.id == action.payload.id ? (item = action.payload) : item
        ),
        isLoading: false,
      };
    case BlockActions.EDIT_BLOCKS_FAILED:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return { ...state };
  }
};
