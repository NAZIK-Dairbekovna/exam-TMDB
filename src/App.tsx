import React from 'react';
import './App.css';
import Home from "./store/components/Home/Home";
import {Route, Routes} from "react-router-dom";
import NowPlaying from "./store/components/NowPlaying/NowPlaying";
import Popular from "./store/components/Popular/Popular";
import Favorite from "./store/components/Favorite";

function App() {
  return (
    <div className="App">
      <Home/>
        <Routes>
            <Route path={'/nowPlaying'} element={<NowPlaying/>}/>
            <Route path={'/popular'} element={<Popular/>}/>
            <Route path={'/favorites'} element={<Favorite/>}/>
        </Routes>
    </div>
  );
}

export default App;
