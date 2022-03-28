import { initialButtonsState } from '../Ducks/States/initialButtonsState';
import { initialInputsState } from '../Ducks/States/initialInputsState';
import { initialBlocksState } from '../Ducks/States/initialBlocksState';
import { initialButtonsNewState } from '../Ducks/States/initialButtonsNewState';
import { initialBlocksNewState } from '../Ducks/States/initialBlocksNewState';
import { initialShopButtons } from '../Ducks/States/initialShopButtons';

export const initialState = {
  buttons: initialButtonsState,
  inputs: initialInputsState,
  blocks: initialBlocksState,
  buttonsNew: initialButtonsNewState,
  blocksNew: initialBlocksNewState,
  buttonsShop: initialShopButtons,
};
