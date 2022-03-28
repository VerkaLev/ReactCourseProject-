import {
  GetBlockRequestedType,
  GetBlockSuccededType,
  GetBlockFailedType,
  SendBlockType,
  SendBlocksFailedType,
  DeleteBlocksType,
  DeleteBlocksFailedType,
  EditBlocksType,
  EditBlocksFaildedType,
  CreateNewBlockType,
  BlockType,
} from '../Types/blockTypes';
import { AccType } from '../Types/types';

export enum BlockActions {
  GET_BLOCKS_REQUESTED = 'GET_BLOCKS_REQUESTED',
  GET_BLOCKS_SUCCEDED = 'GET_BLOCKS_SUCCEDED',
  GET_BLOCKS_FAILED = 'GET_BLOCKS_FAILED',
  SEND_BLOCKS = 'SEND_BLOCKS',
  SEND_BLOCKS_FAILED = 'SEND_BLOCKS_FAILED',
  DELETE_BLOCKS = 'DELETE_BLOCKS',
  DELETE_BLOCKS_FAILED = 'DELETE_BLOCKS_FAILED',
  EDIT_BLOCKS = 'EDIT_BLOCKS',
  EDIT_BLOCKS_FAILED = 'EDIT_BLOCKS_FAILED',
  CREATE_NEW_BLOCK = 'CREATE_NEW_BLOCK',
}

export const getBlockRequested = (payload: string): GetBlockRequestedType => ({
  type: BlockActions.GET_BLOCKS_REQUESTED,
  payload,
});

export const getBlockSucceded = (
  payload: BlockType[]
): GetBlockSuccededType => ({
  type: BlockActions.GET_BLOCKS_SUCCEDED,
  payload,
});

export const getBlockFailed = (e: Error): GetBlockFailedType => ({
  type: BlockActions.GET_BLOCKS_FAILED,
  payload: e.message,
});

export const sendBlocks = (url: string, payload: AccType): SendBlockType => ({
  type: BlockActions.SEND_BLOCKS,
  url,
  payload,
});

export const sendBlocksFailed = (e: Error): SendBlocksFailedType => ({
  type: BlockActions.SEND_BLOCKS_FAILED,
  payload: e.message,
});

export const deleteBlocks = (
  url: string,
  payload: string
): DeleteBlocksType => ({
  type: BlockActions.DELETE_BLOCKS,
  url,
  payload,
});

export const deleteBlocksFailed = (e: Error): DeleteBlocksFailedType => ({
  type: BlockActions.DELETE_BLOCKS_FAILED,
  payload: e.message,
});

export const editBlocks = (url: string, payload: AccType): EditBlocksType => ({
  type: BlockActions.EDIT_BLOCKS,
  url,
  payload,
});

export const editBlocksFailded = (e: Error): EditBlocksFaildedType => ({
  type: BlockActions.EDIT_BLOCKS_FAILED,
  payload: e.message,
});

export const createNewBlock = (
  payload: BlockType,
  name: string
): CreateNewBlockType => ({
  type: BlockActions.CREATE_NEW_BLOCK,
  payload,
  name,
});
