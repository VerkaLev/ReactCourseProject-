import { useButtonsDispatch } from './Hooks/useButtonsDispatch';
import { Link } from 'react-router-dom';
import { PropsMenu } from '../../Ducks/Types/types';
import { useDispatch } from 'react-redux';
import { createNewInput } from '../../Ducks/Actions/actionsInputs';
import { Dispatch } from 'react';
import { ActionInputType } from '../../Ducks/Types/inputTypes';
import { ActionBlockType } from '../../Ducks/Types/blockTypes';
import { createNewBlock } from '../../Ducks/Actions/actionsBlocks';

export const ButtonMenu: React.FC<PropsMenu> = ({ url }) => {
  useButtonsDispatch(url);
  const dispatch: Dispatch<ActionInputType | ActionBlockType> = useDispatch();
  const handleClick = (): void => {
    return (
      dispatch(createNewInput({ display: 'none', id: '', name: '' }, '')),
      dispatch(createNewBlock({ display: 'none', id: '', name: '' }, ''))
    );
  };
  return (
    <Link to="/menu/buttons">
      <button onClick={handleClick} className="nav_btn">
        buttons
      </button>
    </Link>
  );
};
