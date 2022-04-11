import {Canvas} from "@react-three/fiber";
import Box from "../component/3js";
import React from "react";

const Home = (props:any) => {

	return	<Canvas>
		<ambientLight intensity={0.5} />
		<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
		<pointLight position={[-10, -10, -10]} />
		<Box position={[0, 0, 0]} />
	</Canvas>

}

export default Home;