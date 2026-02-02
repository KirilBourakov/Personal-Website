import {useTexture} from "@react-three/drei";
import {useFrame, useThree} from "@react-three/fiber";
import {useRef} from "react";
import {Mesh, Vector3} from "three";
import StdPlanet from "./StdPlanet.tsx";

export default function RotatingSun() {
    const sunTexture = useTexture('materials/sun.jpg')
    const meshRef = useRef<Mesh>(null!)
    const { viewport, camera } = useThree()

    useFrame((_state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.02;
        }
    });

    const radius = viewport.width * 2.5
    const zPos = -radius * 3 + 25
    const { width, height } = viewport.getCurrentViewport(camera, [0, 0, zPos])

    const xPos = width / 4
    const yPos = height - (radius * 4 - 25)

    return (
        <group position={[xPos, yPos, zPos]}>
            <mesh ref={meshRef} >
                <sphereGeometry args={[radius, 64, 64]} />
                <meshStandardMaterial
                    map={sunTexture}
                    emissiveMap={sunTexture}
                    emissive="orange"
                    emissiveIntensity={3.25}
                    toneMapped={false}
                />
            </mesh>

            <StdPlanet
                texture_path={'materials/volcanic.png'}
                radius={radius/6}
                speed={0.05}
                position={new Vector3((-xPos + radius - 10),0, (radius + radius/6))}
            />
        </group>
    )
}