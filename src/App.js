
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import 'upkit/dist/style.min.css';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import store from './app/store';
import React from 'react';
import { listen } from './app/listener';
import Register from './pages/Register';
import RegisterSuccess from './pages/RegisterSuccess';
import Login from './pages/Login';
import { getCart } from './api/cart';
import UserAddressAdd from './pages/UserAddressAdd';
import UserAddress from './pages/UserAdddress';
import Checkout from './pages/Checkout';
import Invoice from './pages/Invoice';
function App() {

  React.useEffect(() => {
    listen();
    getCart();
  },[])

  return (
    <Provider store={store}>
      <Router>
        <Switch>
        <Route path="/login">
          <Login/>
          </Route>
          <Route path="/register/berhasil" component={RegisterSuccess} />
          <Route path="/register" component={Register} />
          <Route path="/alamat-pengiriman/tambah">
            <UserAddressAdd/>
          </Route>
          <Route path="/alamat-pengiriman">
            <UserAddress/>
          </Route>
          <Route path="/checkout">
            <Checkout/>
          </Route>
          <Route path="/invoice/:order_id">
            <Invoice/>
          </Route>
          <Route path="/"  component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
