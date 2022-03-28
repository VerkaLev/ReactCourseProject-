import { Link } from 'react-router-dom';

export const ButtonShoppingCart = () => {
  return (
    <>
      <Link to="/menu/shoppingCart">
        <div className="shopping_cart_menu" />
      </Link>
    </>
  );
};
