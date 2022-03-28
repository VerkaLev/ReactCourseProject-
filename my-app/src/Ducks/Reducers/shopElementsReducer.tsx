import { ButtonActions } from '../Actions/actionsButtons';
import { initialShopButtons } from '../States/initialShopButtons';
import { ButtonShopState } from '../Types/buttonTypes';

export const shopButtonsReducer = (
  state: ButtonShopState = initialShopButtons,
  action: any
): ButtonShopState => {
  switch (action.type) {
    case ButtonActions.ADD_IN_SHOPPING_CART_BUTTON:
      return {
        ...state,
        data: state.data.concat(action.payload),
      };

    default:
      return { ...state };
  }
};
