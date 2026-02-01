import {useFrame, useThree} from "@react-three/fiber";
import type {Mesh} from "three";
import {useTexture} from "@react-three/drei";
import {useRef} from "react";
import * as THREE from "three";

export default function ClippedPlanet(){
    const texture = useTexture('materials/terrestrial.png');
    const cloudTexture = useTexture('materials/clouds.png');
    const meshRef = useRef<Mesh>(null!)
    const { viewport } = useThree()


    useFrame((_state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.02;
        }
    });

    const radius = viewport.width * 2


    const xPos = -5
    const yPos = -viewport.width * 2.1
    const zPos = -radius + 25

    return (


    <group position={[xPos, yPos, zPos]} ref={meshRef}>
        <mesh >
            <sphereGeometry args={[radius, 64, 64]} />
            <meshStandardMaterial
                map={texture}
            />
        </mesh>

        <mesh scale={[1.01, 1.01, 1.01]}>
            <sphereGeometry args={[radius, 64, 64]} />
            <meshStandardMaterial
                map={cloudTexture}
                transparent={true}
                opacity={0.8}
                blending={THREE.AdditiveBlending}
            />
        </mesh>
    </group>
    )
}