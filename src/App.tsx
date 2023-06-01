import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Menu from './components/menu';
import { UserStore } from './contexts/menuContext';
import Home from './pages/home';
import Library from './pages/library';
import History from './pages/history';
import Subscriptions from './pages/subscriptions';
import { UserStorage } from './contexts/userContext';
import Login from './pages/login';
import React from 'react';

function App() {
  return (
    <UserStorage>
      <UserStore>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='library' element={<Library />} />
              <Route path='history' element={<History />} />
              <Route path='subscriptions' element={<Subscriptions />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </div>
        </BrowserRouter>
      </UserStore>
    </UserStorage>
  );
}

export default App;
