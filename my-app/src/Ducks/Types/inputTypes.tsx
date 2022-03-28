import { AccType } from './types';

export type InputType = {
  [key: string]: string | { [key: string]: string };
  id: string;
  name: string;
};

export type InputStateFormType = {
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
  '&:hover': InputHoverType;
};

export type InputHoverType = {
  [key: string]: string;
  'background-color': string;
  color: string;
  'border-width': string;
  'border-style': string;
  'border-color': string;
};

export type InputStateHoverType = InputHoverType | {};

export type InputState = {
  data: InputType[];
  error: InputFailedPayloadType;
  isLoading: boolean;
};

export type State = {
  inputs: InputState;
};

export type InputNewStateType = {
  data: { [key: string]: string | { [key: string]: string } };
};

export type StateNew = {
  inputsNew: InputNewStateType;
};

export type InputFailedPayloadType = null | string | InputType[] | InputType;

export type InputNewState = {
  data: { [key: string]: string | { [key: string]: string } };
};

export type GetInputRequestedType = {
  type: string;
  payload: string;
};

export type GetInputSuccededType = {
  type: string;
  payload: InputType[];
};

export type GetInputFailedType = {
  type: string;
  payload: string;
};

export type SendInputType = {
  type: string;
  url: string;
  payload: AccType;
};

export type SendInputsFailedType = {
  type: string;
  payload: string;
};

export type DeleteInputsType = {
  type: string;
  url: string;
  payload: string;
};

export type DeleteInputsFailedType = {
  type: string;
  payload: string;
};

export type EditInputsType = {
  type: string;
  url: string;
  payload: AccType;
};

export type EditInputsFaildedType = {
  type: string;
  payload: string;
};

export type CreateNewInputType = {
  type: string;
  payload: InputType;
  name: string;
};

export type ActionInputType =
  | GetInputRequestedType
  | GetInputSuccededType
  | GetInputFailedType
  | SendInputType
  | SendInputsFailedType
  | DeleteInputsType
  | DeleteInputsFailedType
  | EditInputsType
  | EditInputsFaildedType
  | CreateNewInputType;
