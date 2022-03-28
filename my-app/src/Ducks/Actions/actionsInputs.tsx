import {
  GetInputRequestedType,
  GetInputSuccededType,
  GetInputFailedType,
  SendInputType,
  SendInputsFailedType,
  DeleteInputsType,
  DeleteInputsFailedType,
  EditInputsType,
  EditInputsFaildedType,
  CreateNewInputType,
  InputType,
} from '../Types/inputTypes';
import { AccType } from '../Types/types';

export enum InputActions {
  GET_INPUTS_REQUESTED = 'GET_INPUTS_REQUESTED',
  GET_INPUTS_SUCCEDED = 'GET_INPUTS_SUCCEDED',
  GET_INPUTS_FAILED = 'GET_INPUTS_FAILED',
  SEND_INPUTS = 'SEND_INPUTS',
  SEND_INPUTS_FAILED = 'SEND_INPUTS_FAILED',
  DELETE_INPUTS = 'DELETE_INPUTS',
  DELETE_INPUTS_FAILED = 'DELETE_INPUTS_FAILED',
  EDIT_INPUTS = 'EDIT_INPUTS',
  EDIT_INPUTS_FAILED = 'EDIT_INPUTS_FAILED',
  CREATE_NEW_INPUT = 'CREATE_NEW_INPUT',
}

export const getInputRequested = (payload: string): GetInputRequestedType => ({
  type: InputActions.GET_INPUTS_REQUESTED,
  payload,
});

export const getInputSucceded = (
  payload: InputType[]
): GetInputSuccededType => ({
  type: InputActions.GET_INPUTS_SUCCEDED,
  payload,
});

export const getInputFailed = (e: Error): GetInputFailedType => ({
  type: InputActions.GET_INPUTS_FAILED,
  payload: e.message,
});

export const sendInputs = (url: string, payload: AccType): SendInputType => ({
  type: InputActions.SEND_INPUTS,
  url,
  payload,
});

export const sendInputsFailed = (e: Error): SendInputsFailedType => ({
  type: InputActions.SEND_INPUTS_FAILED,
  payload: e.message,
});

export const deleteInputs = (
  url: string,
  payload: string
): DeleteInputsType => ({
  type: InputActions.DELETE_INPUTS,
  url,
  payload,
});

export const deleteInputsFailed = (e: Error): DeleteInputsFailedType => ({
  type: InputActions.DELETE_INPUTS_FAILED,
  payload: e.message,
});

export const editInputs = (url: string, payload: AccType): EditInputsType => ({
  type: InputActions.EDIT_INPUTS,
  url,
  payload,
});

export const editInputsFailded = (e: Error): EditInputsFaildedType => ({
  type: InputActions.EDIT_INPUTS_FAILED,
  payload: e.message,
});

export const createNewInput = (
  payload: InputType,
  name: string
): CreateNewInputType => ({
  type: InputActions.CREATE_NEW_INPUT,
  payload,
  name,
});
