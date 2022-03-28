import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { dataStateButtonsName } from '../../Ducks/selectors';
import { ButtonWithStylesCreated } from './Helpers/getButtonWithStylesCreated';

export const ButtonDynamicCreated = () => {
  return (
    <ButtonWithStylesCreated id={nanoid()}>
      {useSelector(dataStateButtonsName)}
    </ButtonWithStylesCreated>
  );
};
