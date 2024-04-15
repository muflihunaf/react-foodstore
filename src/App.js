
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import 'upkit/dist/style.min.css';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import store from './app/store';
import React from 'react';
import { listen } from './app/listener';
import Register from './pages/Register';
function App() {

  React.useEffect(() => {
    listen();
  },[])

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/"  component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
