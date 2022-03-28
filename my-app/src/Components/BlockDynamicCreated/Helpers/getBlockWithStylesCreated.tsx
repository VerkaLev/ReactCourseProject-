import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { dataStateBlocksCreated } from '../../../Ducks/selectors';

export const BlockWithStylesCreated = styled.div(() => {
  const dataStateButtonsCreatedArr = useSelector(dataStateBlocksCreated) || {
    display: 'none',
  };
  return dataStateButtonsCreatedArr;
});
