import { useInputsUrl } from './Helpers/useInputsUrl';
import { Link } from 'react-router-dom';
import { PropsMenu } from '../../Ducks/Types/types';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'react';
import { ActionButtonType } from '../../Ducks/Types/buttonTypes';
import { ActionBlockType } from '../../Ducks/Types/blockTypes';
import { createNewButton } from '../../Ducks/Actions/actionsButtons';
import { createNewBlock } from '../../Ducks/Actions/actionsBlocks';

export const InputMenu: React.FC<PropsMenu> = ({ url }) => {
  useInputsUrl(url);
  const dispatch: Dispatch<ActionButtonType | ActionBlockType> = useDispatch();
  const handleClick = (): void => {
    return (
      dispatch(createNewButton({ display: 'none', id: '', name: '' }, '')),
      dispatch(createNewBlock({ display: 'none', id: '', name: '' }, ''))
    );
  };

  return (
    <Link to="/menu/inputs">
      <button onClick={handleClick} className="nav_btn">
        inputs
      </button>
    </Link>
  );
};
