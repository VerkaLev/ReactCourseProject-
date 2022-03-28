import { useDispatch } from 'react-redux';
import { getBlockRequested } from '../../../Ducks/Actions/actionsBlocks';
import { Dispatch } from 'react';
import { ActionBlockType } from '../../../Ducks/Types/blockTypes';

export const useBlocksDispatch = (url: string) => {
  const dispatch: Dispatch<ActionBlockType> = useDispatch();

  return dispatch(getBlockRequested(url));
};
