import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import type {ThreeElements} from '@react-three/fiber'
import * as THREE from 'three'

function Box(props: ThreeElements['mesh']) {
  // logic ...
  const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  
  useFrame((state, delta) => (meshRef.current.rotation.x += delta))
  
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      {/* meshStandardMaterial REQUIRES light to be seen */}
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

// 2. Export a new App component that renders the Canvas
export default function App() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas>
        {/* 3. Add Lighting so the material is visible */}
        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        
        {/* 4. Render your 3D component inside the Canvas */}
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  )
}
