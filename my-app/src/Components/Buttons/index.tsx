import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { urlBtn } from '../../Consts/index';
import { dataStateButtons, stateButtonsIsLoading } from '../../Ducks/selectors';
import { ButtonWithStyles } from './Helpers/getButtonWithStyles';

import {
  addInShoppingCartButton,
  deleteButtons,
} from '../../Ducks/Actions/actionsButtons';
import { ButtonShopType, ButtonType } from '../../Ducks/Types/buttonTypes';

export const Buttons = () => {
  const dataStateButtonsArr: ButtonType[] = useSelector(dataStateButtons) || [];
  const dispatch = useDispatch();
  const isLoading: boolean = useSelector(stateButtonsIsLoading);
  const handleDeleteClick = (id: string) => {
    dispatch(deleteButtons(urlBtn, id));
  };

  const handleBuyButton: any = (id: string) => {
    const dataIdButton: ButtonShopType[] = dataStateButtonsArr.filter(
      (item) => item.id === id
    );

    dispatch(addInShoppingCartButton(dataIdButton));
  };

  return (
    <>
      {isLoading ? (
        <div className="loading">loading ...</div>
      ) : (
        dataStateButtonsArr.map((item) => (
          <div className="button_edit_delete">
            <ButtonWithStyles key={item.id} id={item.id} props={item}>
              click me
            </ButtonWithStyles>
            <div className="container_edit_delete_buy">
              <Link
                to={{
                  pathname: `/menu/buttons/editElement:${item.id}`,
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

              <div
                onClick={() => handleBuyButton(item.id)}
                id={item.id}
                className="btn_buy"
              ></div>
            </div>
          </div>
        ))
      )}
    </>
  );
};
