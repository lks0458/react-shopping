import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 장바구니 from './components/pages/Basket';
import 로그인 from './components/pages/Login';
import 회원가입 from './components/pages/Member';
import Home from './components/pages/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/basket' component={장바구니} />
            <Route path='/login' exact component={로그인} />
            <Route path='/member' exact component={회원가입} />
          </Switch>
      </Router>
    </>
  )
}

export default App;