import { AccType } from './types';

export type BlockType = {
  [key: string]: string | { [key: string]: string };
  id: string;
  name: string;
};

export type BlockStateFormType = {
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
  '&:hover': BlockHoverType;
};

export type BlockHoverType = {
  [key: string]: string;
  'background-color': string;
  color: string;
  'border-width': string;
  'border-style': string;
  'border-color': string;
};

export type BlockStateHoverType = BlockHoverType | {};

export type BlockState = {
  data: BlockType[];
  error: BlockFailedPayloadType;
  isLoading: boolean;
};

export type State = {
  blocks: BlockState;
};

export type BlockNewStateType = {
  name: string;
  data: { [key: string]: string | { [key: string]: string } };
};

export type StateNew = {
  blocksNew: BlockNewStateType;
};

export type BlockFailedPayloadType = null | string | BlockType[] | BlockType;

export type BlockNewState = {
  name: string;
  data: { [key: string]: string | { [key: string]: string } };
};

export type GetBlockRequestedType = {
  type: string;
  payload: string;
};

export type GetBlockSuccededType = {
  type: string;
  payload: BlockType[];
};

export type GetBlockFailedType = {
  type: string;
  payload: string;
};

export type SendBlockType = {
  type: string;
  url: string;
  payload: AccType;
};

export type SendBlocksFailedType = {
  type: string;
  payload: string;
};

export type DeleteBlocksType = {
  type: string;
  url: string;
  payload: string;
};

export type DeleteBlocksFailedType = {
  type: string;
  payload: string;
};

export type EditBlocksType = {
  type: string;
  url: string;
  payload: AccType;
};

export type EditBlocksFaildedType = {
  type: string;
  payload: string;
};

export type CreateNewBlockType = {
  type: string;
  payload: BlockType;
  name: string;
};

export type ActionBlockType =
  | GetBlockRequestedType
  | GetBlockSuccededType
  | GetBlockFailedType
  | SendBlockType
  | SendBlocksFailedType
  | DeleteBlocksType
  | DeleteBlocksFailedType
  | EditBlocksType
  | EditBlocksFaildedType
  | CreateNewBlockType;
