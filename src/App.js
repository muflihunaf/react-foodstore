
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
