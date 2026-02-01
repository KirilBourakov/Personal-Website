import './App.css'
import { Canvas } from '@react-three/fiber'
import GlowingSun from "./components/GlowingSun.tsx";


// 2. Export a new App component that renders the Canvas
export default function App() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Canvas dpr={[1, 1]}>
          <GlowingSun />
          <ambientLight intensity={0.5} />
      </Canvas>
    </div>
  )
}
