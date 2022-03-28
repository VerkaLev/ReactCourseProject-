import {
  State as ButtonState,
  ButtonType,
  ButtonShopState,
  ButtonShopType,
  StateShop,
} from './Types/buttonTypes';
import { State as BlockState, BlockType } from './Types/blockTypes';
import { State as InputState, InputType } from './Types/inputTypes';
import { StateNew as ButtonStateNew } from './Types/buttonTypes';
import { StateNew as InputStateNew } from './Types/inputTypes';
import { StateNew as BlockStateNew } from './Types/blockTypes';
import { AccType } from './Types/types';

export const dataStateButtons = (state: ButtonState): ButtonType[] =>
  state.buttons.data;
export const dataStateBlocks = (state: BlockState): BlockType[] =>
  state.blocks.data;
export const dataStateInputs = (state: InputState): InputType[] =>
  state.inputs.data;
export const dataStateButtonsCreated = (state: ButtonStateNew): AccType =>
  state.buttonsNew.data;
export const dataStateBlocksCreated = (state: BlockStateNew): AccType =>
  state.blocksNew.data;
export const dataStateInputsCreated = (state: InputStateNew): AccType =>
  state.inputsNew.data;
export const dataStateButtonsName = (state: ButtonStateNew): string =>
  state.buttonsNew.name;
export const dataStateBlocksName = (state: BlockStateNew): string =>
  state.blocksNew.name;
export const stateButtonsIsLoading = (state: ButtonState): boolean =>
  state.buttons.isLoading;
export const stateBlocksIsLoading = (state: BlockState): boolean =>
  state.blocks.isLoading;
export const stateInputsIsLoading = (state: InputState): boolean =>
  state.inputs.isLoading;
export const dataShopButtons = (state: StateShop): ButtonShopType[] =>
  state.buttonsShop.data;
