import { buttonsReducer } from '../Ducks/Reducers/buttonsReducer';
import { blocksReducer } from '../Ducks/Reducers/blocksReducer';
import { inputsReducer } from '../Ducks/Reducers/inputsReducer';
import {
  blocksNewReducer,
  buttonsNewReducer,
  inputsNewReducer,
} from '../Ducks/Reducers/newElementsReducer';
import { shopButtonsReducer } from '../Ducks/Reducers/shopElementsReducer';

export const rootReducer = {
  buttons: buttonsReducer,
  blocks: blocksReducer,
  inputs: inputsReducer,
  blocksNew: blocksNewReducer,
  buttonsNew: buttonsNewReducer,
  inputsNew: inputsNewReducer,
  buttonsShop: shopButtonsReducer,
};
