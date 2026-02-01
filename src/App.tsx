import { Canvas } from '@react-three/fiber'
import {Bloom, EffectComposer} from "@react-three/postprocessing";
import RotatingSun from "./components/RotatingSun.tsx";
import OrbitingPlanet from "./components/OrbitingPlanet.tsx";


// 2. Export a new App component that renders the Canvas
export default function App() {
  return (
    <div style={{ height: '100vh', width: '100vw', margin: '0px' }}>
      <Canvas dpr={[1, 1]}>
          <EffectComposer autoClear={false} multisampling={0}>
              <Bloom luminanceThreshold={1} intensity={1.5} selectable />
          </EffectComposer>
          <RotatingSun />

          <OrbitingPlanet texture_path={'materials/volcanic.png'} scale={.25} radius={1.5} speed={1}/>

          <OrbitingPlanet texture_path={'materials/terrestrial.png'} scale={.33} radius={2.5} speed={.5}/>

          <OrbitingPlanet texture_path={'materials/gaseous.png'} scale={1} radius={5} speed={.33}/>

          <ambientLight intensity={0.5} />
      </Canvas>
    </div>
  )
}
