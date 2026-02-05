import {useFrame} from "@react-three/fiber";
import type {Mesh} from "three";
import {useRef, useState} from "react";
import Sun from "./models/Sun.tsx";
import {Html, Line} from "@react-three/drei";

export default function SunGroup(){
    const [hover, setHover] = useState(false);
    const meshRef = useRef<Mesh>(null!)
    useFrame((_state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.1;
        }
    });

    return (
        <>
            <group
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                <Sun scale={hover ? .3 : .25} ref={meshRef}/>
                <Line
                    points={[[0, 0, 0], [0, -1.2, 0], [0.5, -1.2, 0]]}
                    color="black"
                    opacity={.3}
                    lineWidth={hover ? 3 : 2}
                />
                <Html position={[0.5, -1, 0]}>
                    <div
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        className={`${hover ? "p-3" : "p-2"} rounded-lg whitespace-nowrap bg-black/30 text-white`}
                    >
                        [ RESUME ]
                    </div>
                </Html>
            </group>
        </>

    )
}