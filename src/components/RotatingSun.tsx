import {useTexture} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import {useRef} from "react";
import {Mesh} from "three";

export default function RotatingSun() {
    const sunTexture = useTexture('materials/sun.jpg')
    const meshRef = useRef<Mesh>(null!)

    useFrame((_state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.5;
        }
    });

    return (
        <mesh position={[0, 0, 0]} scale={[.5, .5, .5]} ref={meshRef} >
            <sphereGeometry />
            <meshStandardMaterial
                map={sunTexture}
                emissiveMap={sunTexture}
                emissive="orange"
                emissiveIntensity={4.5}
                toneMapped={false}
            />
        </mesh>
    )
}