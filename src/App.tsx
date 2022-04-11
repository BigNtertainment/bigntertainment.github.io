import React from 'react';
import classes from './App.module.css';
import Link from "./component/Link";
import Box from "./component/3js";

function App() {
  return (
    <div className={classes.App}>
          <h1 className={classes.name}>BigNtertainment</h1>
          <Link to={""}>aaaa</Link>

    </div>
  );
}

export default App;
