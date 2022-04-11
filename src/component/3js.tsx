import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Box(props: JSX.IntrinsicElements['mesh']) {
	const mesh = useRef(null!)
	const [hovered, hover] = useState(false)
	const [clicked, click] = useState(false)
	const loader = new THREE.TextureLoader();
	// @ts-ignore
	useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
	return (
		<mesh
			{...props}
			ref={mesh}
			scale={clicked ? 1.5 : 1}
			onClick={(event) => click(!clicked)}
			onPointerOver={(event) => hover(true)}
			onPointerOut={(event) => hover(false)}>
			<boxGeometry args={[1, 1, 1]} />
			{/*<sphereGeometry args={[1, 64, 32]}/>*/}
			<meshStandardMaterial color={hovered ? '#DA1E37' : '#F8F9FA'} map={loader.load("/logo.png")} />
		</mesh>
	)
}

export default Box;