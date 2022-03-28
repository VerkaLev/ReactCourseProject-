import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { urlBlock } from '../../Consts/index';
import { dataStateBlocks, stateBlocksIsLoading } from '../../Ducks/selectors';
import { BlockWithStyles } from './Helpers/getBlockWithStyles';

import { deleteBlocks } from '../../Ducks/Actions/actionsBlocks';
import { ActionBlockType, BlockType } from '../../Ducks/Types/blockTypes';
import { Dispatch } from 'react';

export const Blocks = () => {
  const dataStateBlocksArr: BlockType[] = useSelector(dataStateBlocks) || [];
  const dispatch: Dispatch<ActionBlockType> = useDispatch();
  const isLoading: boolean = useSelector(stateBlocksIsLoading);
  const handleDeleteClick = (id: string) => {
    dispatch(deleteBlocks(urlBlock, id));
  };

  return (
    <>
      {isLoading ? (
        <div className="loading">loading ...</div>
      ) : (
        dataStateBlocksArr.map((item: BlockType) => (
          <div className="button_edit_delete">
            <BlockWithStyles
              key={item.id}
              id={item.id}
              className="button_with_styles"
              props={item}
            >
              Block
            </BlockWithStyles>
            <div className="container_edit_delete_buy">
              <Link
                to={{
                  pathname: `/menu/blocks/editElement:${item.id}`,
                  state: item,
                }}
              >
                <div id={item.id} className="btn_edit" />
              </Link>

              <div
                onClick={() => handleDeleteClick(item.id)}
                id={item.id}
                className="delete"
              />

              <div id={item.id} className="btn_buy"></div>
            </div>
          </div>
        ))
      )}
    </>
  );
};
