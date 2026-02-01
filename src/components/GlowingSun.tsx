
import { Selection, Select, EffectComposer, Bloom } from '@react-three/postprocessing'
import {useTexture} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import {useRef} from "react";
import {Mesh} from "three";

export default function GlowingSun(){
    const sunTexture = useTexture('materials/2k_sun.jpg')
    const meshRef = useRef<Mesh>(null!)

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.5;
        }
    });

    return (
        <Selection>
            <EffectComposer autoClear={false} multisampling={0}>
                <Bloom luminanceThreshold={1} intensity={1.5} selectable />
            </EffectComposer>

            <Select enabled>
                <mesh position={[2, 0, 0]} ref={meshRef} >
                    <sphereGeometry />
                    <meshStandardMaterial
                        map={sunTexture}
                        emissiveMap={sunTexture}
                        emissive="orange"
                        emissiveIntensity={4}
                        toneMapped={false}
                    />
                </mesh>
            </Select>
        </Selection>
    )
}