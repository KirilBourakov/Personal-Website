import {useTexture} from "@react-three/drei";
import {useMemo, useRef} from "react";
import {Mesh} from "three";
import {useFrame} from "@react-three/fiber";


interface OrbProps {
    texture_path: string;
    scale: number;
    radius: number;
    speed: number;
}

export default function OrbitingPlanet({texture_path, scale, radius, speed} : OrbProps) {
    const texture = useTexture(texture_path);
    const meshRef = useRef<Mesh>(null!)
    // eslint-disable-next-line react-hooks/purity
    const randomStart = useMemo(() => Math.random() * Math.PI * 2, []);

    useFrame((state, delta) => {
        if (meshRef.current) {
            const time = state.clock.getElapsedTime()

            const dist = (time * speed) + randomStart

            meshRef.current.position.x = Math.cos(dist) * radius;
            meshRef.current.position.y = Math.sin(dist) * radius;

            meshRef.current.rotation.y += delta * 0.5;
        }
    });

    return (
        <mesh position={[0, 0, 0]} scale={[scale, scale, scale]} ref={meshRef} >
            <sphereGeometry />
            <meshStandardMaterial
                map={texture}
            />
        </mesh>
    )
}