import { AccType } from './types';

export type ButtonType = {
  [key: string]: string | { [key: string]: string };
  id: string;
  name: string;
};

export type ButtonStateFormType = {
  id: string;
  name: string;
  'background-color': string;
  width: string;
  'border-radius': string;
  height: string;
  color: string;
  'border-width': string;
  'border-style': string;
  'border-color': string;
  'box-shadow': {
    [key: string]: string;
  };
  '&:hover': ButtonHoverType;
};

export type ButtonHoverType = {
  [key: string]: string;
  'background-color': string;
  color: string;
  'border-width': string;
  'border-style': string;
  'border-color': string;
};

export type ButtonStateHoverType = ButtonHoverType | {};

export type ButtonState = {
  data: ButtonType[];
  error: ButtonFailedPayloadType;
  isLoading: boolean;
};

export type ButtonShopState = {
  data: ButtonShopType[];
};

export type ButtonShopType = {
  [key: string]: string | { [key: string]: string };
};

export type State = {
  buttons: ButtonState;
};

export type StateShop = {
  buttonsShop: ButtonShopState;
};
export type ButtonNewStateType = {
  name: string;
  data: { [key: string]: string | { [key: string]: string } };
};

export type StateNew = {
  buttonsNew: ButtonNewStateType;
};

export type ButtonFailedPayloadType = null | string | ButtonType[] | ButtonType;

export type ButtonNewState = {
  name: string;
  data: { [key: string]: string | { [key: string]: string } };
};

export type GetButtonRequestedType = {
  type: string;
  payload: string;
};

export type GetButtonSuccededType = {
  type: string;
  payload: ButtonType[];
};

export type GetButtonFailedType = {
  type: string;
  payload: string;
};

export type SendButtonType = {
  type: string;
  url: string;
  payload: AccType;
};

export type SendButtonsFailedType = {
  type: string;
  payload: string;
};

export type DeleteButtonsType = {
  type: string;
  url: string;
  payload: string;
};

export type DeleteButtonsFailedType = {
  type: string;
  payload: string;
};

export type EditButtonsType = {
  type: string;
  url: string;
  payload: AccType;
};

export type EditButtonsFaildedType = {
  type: string;
  payload: string;
};

export type CreateNewButtonType = {
  type: string;
  payload: ButtonType;
  name: string;
};

export type AddInShoppingCartButtonType = {
  type: string;
  payload: ButtonShopType[];
};

export type ActionButtonType =
  | GetButtonRequestedType
  | GetButtonSuccededType
  | GetButtonFailedType
  | SendButtonType
  | SendButtonsFailedType
  | DeleteButtonsType
  | DeleteButtonsFailedType
  | EditButtonsType
  | EditButtonsFaildedType
  | CreateNewButtonType;
