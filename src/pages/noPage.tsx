import {Canvas} from "@react-three/fiber";
import Box404 from "../component/Box404";
import React from "react";

const NoPage = (props:any) => {

	return	<Canvas>
		<ambientLight intensity={0.5} />
		<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
		<pointLight position={[-10, -10, -10]} />
		<Box404 position={[0, 0, 0]} />
	</Canvas>

}

export default NoPage;