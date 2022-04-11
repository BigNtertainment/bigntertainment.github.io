import * as THREE from 'three'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function Box(props: JSX.IntrinsicElements['mesh']) {
	const mesh = useRef(null!)
	const [hovered, hover] = useState(false)
	const [clicked, click] = useState(false)
	const loader = new THREE.TextureLoader();
	// LMAO... yeah i know
	// @ts-ignore
	useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
	// @ts-ignore
	useFrame((state, delta) => (mesh.current.rotation.y += 0.01))
	// pain is over
	return (
		<mesh
			{...props}
			ref={mesh}
			scale={1}
			onClick={(event) => {
				click(!clicked);
				// window.location.href = ""
			}}
			onPointerOver={(event) => hover(true)}
			onPointerOut={(event) => hover(false)}>
			<boxGeometry args={[1, 1, 1]}/>
			{!clicked  && <meshStandardMaterial color={hovered ? '#DA1E37' : '#F8F9FA'} map={loader.load("/logo.png")} />}
			{clicked && <meshStandardMaterial color={hovered ? '#DA1E37' : '#F8F9FA'} />}

		</mesh>
	)
}

export default Box;