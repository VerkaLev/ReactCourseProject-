import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { dataStateButtonsCreated } from '../../../Ducks/selectors';

export const ButtonWithStylesCreated = styled.button(() => {
  const dataStateButtonsCreatedArr = useSelector(dataStateButtonsCreated) || {
    display: 'none',
  };
  return dataStateButtonsCreatedArr;
});
