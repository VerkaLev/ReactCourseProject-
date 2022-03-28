import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { SignUp } from './Components/SignUp';

import { Menu } from './Components/Menu';
import { LogIn } from './Components/LogIn';

import { PrivateRoute } from './Components/PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <>
          <h1 className="name_app">
            create
            <br /> your <br /> element . . .
          </h1>
          <Route path="/" exact component={LogIn} />
          <Route path="/signUp" component={SignUp} />
          <div>
            <PrivateRoute path="/menu" component={Menu} />
          </div>
        </>
      </Switch>
    </Router>
  );
}

export default App;
