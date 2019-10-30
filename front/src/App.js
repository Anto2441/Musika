import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import AlbumList from './components/AlbumList';
import AddAlbum from './components/AddAlbum';
import Footer from './components/Footer';

import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/AlbumList' component={AlbumList} />
        <Route path='/AddAlbum' component={AddAlbum} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
