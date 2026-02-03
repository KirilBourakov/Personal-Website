import {IcePlanet} from "./models/IcePlanet.tsx";
import {useFrame} from "@react-three/fiber";
import type {Mesh} from "three";
import {useRef} from "react";
import Sun from "./models/Sun.tsx";
import {Html, Line} from "@react-three/drei";

export default function SunGroup(){
    const meshRef = useRef<Mesh>(null!)
    useFrame((_state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.1;
        }
    });

    return (
        <>
            <Sun scale={.25} ref={meshRef}/>
            <Line points={[[0, 0, 0], [0, -1.2, 0], [0.5, -1.2, 0]]} color="black" opacity={.3} lineWidth={2} />
            <Html position={[0.5, -1, 0]}>
                <div
                    className="p-2 rounded-lg whitespace-nowrap bg-black/30 text-white"
                >
                    [ RESUME ]
                </div>
            </Html>
        </>

    )
}