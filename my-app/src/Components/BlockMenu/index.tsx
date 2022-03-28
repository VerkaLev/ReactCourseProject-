import { useBlocksDispatch } from './Hooks/useBlocksDispatch';
import { Link } from 'react-router-dom';
import { PropsMenu } from '../../Ducks/Types/types';
import { ActionInputType } from '../../Ducks/Types/inputTypes';
import { ActionButtonType } from '../../Ducks/Types/buttonTypes';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'react';
import { createNewInput } from '../../Ducks/Actions/actionsInputs';
import { createNewButton } from '../../Ducks/Actions/actionsButtons';

export const BlockMenu: React.FC<PropsMenu> = ({ url }) => {
  useBlocksDispatch(url);
  const dispatch: Dispatch<ActionInputType | ActionButtonType> = useDispatch();
  const handleClick = (): void => {
    return (
      dispatch(createNewInput({ display: 'none', id: '', name: '' }, '')),
      dispatch(createNewButton({ display: 'none', id: '', name: '' }, ''))
    );
  };
  return (
    <Link to="/menu/blocks">
      <button onClick={handleClick} className="nav_btn">
        blocks
      </button>
    </Link>
  );
};
