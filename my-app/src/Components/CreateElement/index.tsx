import { Link, useLocation } from 'react-router-dom';

export const CreateElement = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === '/menu/buttons' ? (
        <Link
          to="/menu/buttons/createElement"
          className="btn_create_new_element"
        >
          <button className="nav_new_btn">Create New Button</button>
        </Link>
      ) : pathname === '/menu/inputs' ? (
        <Link
          to="/menu/inputs/createElement"
          className="btn_create_new_element"
        >
          <button className="nav_new_btn">Create New Input</button>
        </Link>
      ) : pathname === '/menu/blocks' ? (
        <Link
          to="/menu/blocks/createElement"
          className="btn_create_new_element"
        >
          <button className="nav_new_btn">Create New Block</button>
        </Link>
      ) : (
        ''
      )}
    </>
  );
};
