import {DoubleSide, Vector3} from "three";
import StdPlanet from "./StdPlanet.tsx";

export default function BackPlanet(){
    const ringData = [
        { inner: 1.2, outer: 1.3, opacity: 0.8 },
        { inner: 1.35, outer: 1.6, opacity: 0.4 },
        { inner: 1.65, outer: 1.7, opacity: 0.9 },
        { inner: 1.8, outer: 2.2, opacity: 0.2 },
    ]

    const radius = .8

    const xPos = -5
    const yPos = -2


    return (
        <group position={[xPos, -yPos, 0]}>
            <StdPlanet texture_path={"materials/gaseous.png"} radius={radius} speed={.2} position={new Vector3(0, 0, 0)} />

            <group rotation={[Math.PI / 2, 0, 0]}>
                {ringData.map((ring, index) => (
                    <mesh key={index}>
                        <ringGeometry
                            args={[radius * ring.inner, radius * ring.outer, 128]}
                        />
                        <meshStandardMaterial
                            color="peachpuff"
                            transparent
                            opacity={ring.opacity}
                            side={DoubleSide}
                        />
                    </mesh>
                ))}
            </group>
        </group>
    )
}