import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { ButtonMenu } from '../../Components/ButtonMenu/index';
import { BlockMenu } from '../../Components/BlockMenu/index';
import { InputMenu } from '../InputMenu/index';
import { Buttons } from '../Buttons/index';
import { Blocks } from '../Blocks/index';
import { Inputs } from '../Inputs/index';

import { CreateElement } from '../CreateElement';

import { FormButton } from '../../Components/FormButton/index';
import { FormInput } from '../../Components/FormInput/index';
import { FormBlock } from '../../Components/FormBlock/index';
import { FormEditButton } from '../FormEditButton/index';
import { FormEditBlock } from '../FormEditBlock/index';
import { FormEditInput } from '../FormEditInput/index';
import { ButtonDynamicCreated } from '../ButtonDynamicCreated';
import { BlockDynamicCreated } from '../BlockDynamicCreated';
import { InputDynamicCreated } from '../InputDynamicCreated/index';
import { urlBtn, urlInput, urlBlock } from '../../Consts';

import { auth } from '../../Firebase';
import { ButtonShoppingCart } from '../ButtonShoppingCart';
import { ShoppingCart } from '../ShoppingCart';

export const Menu = () => {
  const history = useHistory();

  const handleLogOut = async (): Promise<void> => {
    await auth.signOut();
    localStorage.removeItem('user');
    history.push('/');
  };
  return (
    <div className="app_and_bottom">
      <div className="App">
        <Router>
          <nav className="column_menu">
            <div className="buttons_menu">
              <ButtonMenu url={urlBtn} />
              <InputMenu url={urlInput} />
              <BlockMenu url={urlBlock} />
            </div>

            <CreateElement />

            <ButtonShoppingCart />

            <button onClick={handleLogOut} className="logout">
              log out
            </button>
          </nav>

          <section className="column_with_elements">
            <p className="prompt_click"> -----click on one of these buttons </p>

            <div className="container_with_elements">
              <ButtonDynamicCreated />
              <Switch>
                <Route path="/menu/buttons" component={Buttons} />
              </Switch>

              <BlockDynamicCreated />
              <Switch>
                <Route path="/menu/blocks" component={Blocks} />
              </Switch>

              <InputDynamicCreated />
              <Switch>
                <Route path="/menu/inputs" component={Inputs} />
              </Switch>
            </div>
            <p className="fantastic_graphic"> what is fantastic design-----</p>
          </section>

          <div className="container_with_form">
            <Switch>
              <>
                <Route
                  path="/menu/buttons/createElement"
                  component={FormButton}
                />
                <Route
                  path="/menu/buttons/editElement:id"
                  component={FormEditButton}
                />

                <Route
                  path="/menu/blocks/createElement"
                  component={FormBlock}
                />
                <Route
                  path="/menu/blocks/editElement:id"
                  component={FormEditBlock}
                />

                <Route
                  path="/menu/inputs/createElement"
                  component={FormInput}
                />
                <Route
                  path="/menu/inputs/editElement:id"
                  component={FormEditInput}
                />
                <Route path="/menu/shoppingCart" component={ShoppingCart} />
              </>
            </Switch>
          </div>
        </Router>
      </div>
      <p className="name_app_bottom">. . . and buy</p>
    </div>
  );
};
