import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { dataStateInputsCreated } from '../../../Ducks/selectors';

export const InputWithStylesCreated = styled.input(() => {
  const dataStateInputsCreatedArr = useSelector(dataStateInputsCreated) || {
    display: 'none',
  };
  return dataStateInputsCreatedArr;
});
