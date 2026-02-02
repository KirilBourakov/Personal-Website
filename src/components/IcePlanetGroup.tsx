import {IcePlanet} from "./models/IcePlanet.tsx";
import {useFrame} from "@react-three/fiber";
import type {Mesh} from "three";
import {useRef} from "react";

export default function IcePlanetGroup(){
    const meshRef = useRef<Mesh>(null!)
    useFrame((_state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.1;
        }
    });

    return (
        <IcePlanet scale={0.0025} ref={meshRef}/>
    )
}