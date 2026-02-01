import {useTexture} from "@react-three/drei";
import {useRef} from "react";
import {Mesh, Vector3} from "three";
import {useFrame} from "@react-three/fiber";


interface OrbProps {
    texture_path: string
    radius: number
    speed: number
    position: Vector3
}

export default function StdPlanet({texture_path, radius, speed, position} : OrbProps) {
    const texture = useTexture(texture_path)
    const meshRef = useRef<Mesh>(null!)
    useFrame((_state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * speed;
        }
    });

    return (
        <mesh position={position} ref={meshRef} >
            <sphereGeometry args={[radius, 64, 64]} />
            <meshStandardMaterial
                map={texture}
            />
        </mesh>
    )
}