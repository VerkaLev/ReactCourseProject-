import { useDispatch } from 'react-redux';
import { getInputRequested } from '../../../Ducks/Actions/actionsInputs';
import { Dispatch } from 'react';
import { ActionInputType } from '../../../Ducks/Types/inputTypes';

export const useInputsUrl = (url: string) => {
  const dispatch: Dispatch<ActionInputType> = useDispatch();

  return dispatch(getInputRequested(url));
};
