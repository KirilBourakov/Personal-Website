import { Canvas } from '@react-three/fiber'
import {Bloom, EffectComposer} from "@react-three/postprocessing";
import RotatingSun from "./components/RotatingSun.tsx";
import ClippedPlanet from "./components/ClippedPlanet.tsx";
import BackPlanet from "./components/BackPlanet.tsx";
import CenterShip from "./components/CenterShip.tsx";


export default function App() {
  return (
    <div style={{ height: '100vh', width: '100vw', margin: '0px' }}>
      <Canvas dpr={[1, 1]}>
          <EffectComposer autoClear={false} multisampling={0}>
              <Bloom luminanceThreshold={1} intensity={2} selectable />
          </EffectComposer>

          <ClippedPlanet />

          <RotatingSun />

          <BackPlanet />

          <CenterShip />

          <ambientLight intensity={1} />
      </Canvas>
    </div>
  )
}
