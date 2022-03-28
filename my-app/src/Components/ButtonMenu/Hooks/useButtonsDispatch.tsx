import { useDispatch } from 'react-redux';
import { getButtonRequested } from '../../../Ducks/Actions/actionsButtons';

export const useButtonsDispatch = (url: string) => {
  const dispatch = useDispatch();

  return dispatch(getButtonRequested(url));
};
