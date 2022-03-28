import { initialButtonsNewState } from '../States/initialButtonsNewState';
import { initialBlocksNewState } from '../States/initialBlocksNewState';
import { initialInputsNewState } from '../States/initialInputsNewState';
import { ButtonActions } from '../Actions/actionsButtons';
import { BlockActions } from '../Actions/actionsBlocks';
import { InputActions } from '../Actions/actionsInputs';

import { ButtonNewState, CreateNewButtonType } from '../Types/buttonTypes';
import { BlockNewState, CreateNewBlockType } from '../Types/blockTypes';
import { InputNewState, CreateNewInputType } from '../Types/inputTypes';

export const buttonsNewReducer = (
  state: ButtonNewState = initialButtonsNewState,
  action: CreateNewButtonType
): ButtonNewState => {
  switch (action.type) {
    case ButtonActions.CREATE_NEW_BUTTON:
      return {
        ...state,
        data: action.payload,
        name: action.name,
      };

    default:
      return { ...state };
  }
};

export const blocksNewReducer = (
  state: BlockNewState = initialBlocksNewState,
  action: CreateNewBlockType
): BlockNewState => {
  switch (action.type) {
    case BlockActions.CREATE_NEW_BLOCK:
      return {
        ...state,
        data: action.payload,
        name: action.name,
      };

    default:
      return { ...state };
  }
};

export const inputsNewReducer = (
  state: InputNewState = initialInputsNewState,
  action: CreateNewInputType
): InputNewState => {
  switch (action.type) {
    case InputActions.CREATE_NEW_INPUT:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return { ...state };
  }
};
