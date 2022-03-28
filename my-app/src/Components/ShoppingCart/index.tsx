import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { dataShopButtons } from '../../Ducks/selectors';
import { ButtonShopType } from '../../Ducks/Types/buttonTypes';
import { ButtonWithStylesShop } from './Helpers/getButtonWithStylesCreated';

export const ShoppingCart = () => {
  const dataShopButtonsArr: ButtonShopType[] = useSelector(dataShopButtons);
  console.log(dataShopButtonsArr);

  const history = useHistory();
  const handleCloseClick = () => {
    history.goBack();
  };

  return (
    <div className="shopping_cart">
      <p className="header_shopping_cart">what i want to buy</p>

      <div className="elements_shop">
        {dataShopButtonsArr.map((item) => {
          return (
            <div className="button_delete_shop">
              <ButtonWithStylesShop props={item}>Click me</ButtonWithStylesShop>

              <div className="delete" />
            </div>
          );
        })}
      </div>

      <div className="container_btns_buy_shopping_cart">
        <button className="btns_buy_shopping_cart" onClick={handleCloseClick}>
          x
        </button>
        <button className="btns_buy_shopping_cart">byu all</button>
        <button className="btns_buy_shopping_cart">clear all</button>
      </div>
    </div>
  );
};
