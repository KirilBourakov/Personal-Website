import './App.css'
import {Suspense, useRef, useState} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Sun from './components/models/Sun.jsx'
import type {ThreeElements} from '@react-three/fiber'
import * as THREE from 'three'
import {Stage} from "@react-three/drei";

// 2. Export a new App component that renders the Canvas
export default function App() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas>
        {/*<ambientLight intensity={Math.PI / 2} />*/}
        {/*<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />*/}

          <Suspense fallback={null}>
              <Stage intensity={0.1}>
                  <Sun />
              </Stage>
          </Suspense>
      </Canvas>
    </div>
  )
}
