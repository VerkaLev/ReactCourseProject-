import {
  GetButtonRequestedType,
  GetButtonSuccededType,
  GetButtonFailedType,
  SendButtonType,
  SendButtonsFailedType,
  DeleteButtonsType,
  DeleteButtonsFailedType,
  EditButtonsType,
  EditButtonsFaildedType,
  CreateNewButtonType,
  ButtonType,
  AddInShoppingCartButtonType,
  ButtonShopType,
} from '../Types/buttonTypes';
import { AccType } from '../Types/types';

export enum ButtonActions {
  GET_BUTTONS_REQUESTED = 'GET_BUTTONS_REQUESTED',
  GET_BUTTONS_SUCCEDED = 'GET_BUTTONS_SUCCEDED',
  GET_BUTTONS_FAILED = 'GET_BUTTONS_FAILED',
  SEND_BUTTONS = 'SEND_BUTTONS',
  SEND_BUTTONS_FAILED = 'SEND_BUTTONS_FAILED',
  DELETE_BUTTONS = 'DELETE_BUTTONS',
  DELETE_BUTTONS_FAILED = 'DELETE_BUTTONS_FAILED',
  EDIT_BUTTONS = 'EDIT_BUTTONS',
  EDIT_BUTTONS_FAILED = 'EDIT_BUTTONS_FAILED',
  CREATE_NEW_BUTTON = 'CREATE_NEW_BUTTON',
  ADD_IN_SHOPPING_CART_BUTTON = 'ADD_IN_SHOPPING_CART_BUTTON',
}

export const getButtonRequested = (
  payload: string
): GetButtonRequestedType => ({
  type: ButtonActions.GET_BUTTONS_REQUESTED,
  payload,
});

export const getButtonSucceded = (
  payload: ButtonType[]
): GetButtonSuccededType => ({
  type: ButtonActions.GET_BUTTONS_SUCCEDED,
  payload,
});

export const getButtonFailed = (e: Error): GetButtonFailedType => ({
  type: ButtonActions.GET_BUTTONS_FAILED,
  payload: e.message,
});

export const sendButtons = (url: string, payload: AccType): SendButtonType => ({
  type: ButtonActions.SEND_BUTTONS,
  url,
  payload,
});

export const sendButtonsFailed = (e: Error): SendButtonsFailedType => ({
  type: ButtonActions.SEND_BUTTONS_FAILED,
  payload: e.message,
});

export const deleteButtons = (
  url: string,
  payload: string
): DeleteButtonsType => ({
  type: ButtonActions.DELETE_BUTTONS,
  url,
  payload,
});

export const deleteButtonsFailed = (e: Error): DeleteButtonsFailedType => ({
  type: ButtonActions.DELETE_BUTTONS_FAILED,
  payload: e.message,
});

export const editButtons = (
  url: string,
  payload: AccType
): EditButtonsType => ({
  type: ButtonActions.EDIT_BUTTONS,
  url,
  payload,
});

export const editButtonsFailded = (e: Error): EditButtonsFaildedType => ({
  type: ButtonActions.EDIT_BUTTONS_FAILED,
  payload: e.message,
});

export const createNewButton = (
  payload: ButtonType,
  name: string
): CreateNewButtonType => ({
  type: ButtonActions.CREATE_NEW_BUTTON,
  payload,
  name,
});

export const addInShoppingCartButton = (
  payload: ButtonShopType[]
): AddInShoppingCartButtonType => ({
  type: ButtonActions.ADD_IN_SHOPPING_CART_BUTTON,
  payload,
});
