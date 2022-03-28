import { useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { dataStateBlocksName } from '../../Ducks/selectors';
import { BlockWithStylesCreated } from './Helpers/getBlockWithStylesCreated';

export const BlockDynamicCreated = () => {
  return (
    <BlockWithStylesCreated className="btn_with_styles_created" id={nanoid()}>
      {useSelector(dataStateBlocksName)}
    </BlockWithStylesCreated>
  );
};
