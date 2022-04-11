import * as THREE from 'three'
import React from 'react';
import classes from './App.module.css';
import Link from "./component/Link";
import Box from "./component/3js";
import { Canvas, useFrame } from '@react-three/fiber'

function App() {
  return (
    <div className={classes.App}>
            <h1 className={classes.name}>BigNtertainment</h1>
            <Link to={""}>aaaa</Link>
        <Canvas>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Box position={[0, 0, 0]} />
        </Canvas>

    </div>
  );
}

export default App;
