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
import Shorts from './pages/shorts';

function App() {
  return (
    <UserStorage>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <div className="App">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/shorts' element={<Shorts />} />
              <Route path='library' element={<Library />} />
              <Route path='history' element={<History />} />
              <Route path='subscriptions' element={<Subscriptions />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </div>
        </BrowserRouter>
    </UserStorage>
  );
}

export default App;
