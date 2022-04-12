import * as THREE from 'three'
import React from 'react';
import classes from './App.module.css';
import Link from "./component/Link";
import Home from "./pages/home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SelfLink from "./component/selfLink";
import BigNgine from "./pages/bigNgine";
import NoPage from "./pages/noPage";


function App() {
  return (
    <div className={classes.App}>
           <h1><a target={"_self"} href={"/"} className={classes.name}>BigNtertainment</a></h1>
             <SelfLink to={"/BigNgine"}>BigNgine</SelfLink>
            <Router>
                <Routes>
                    <Route path={"/"} element={<Home/>} />
                    <Route path={"/bigngine"} element={<BigNgine/>} />
                    <Route path={"*"} element={<NoPage/>}/>
                </Routes>
            </Router>

    </div>
  );
}

export default App;
