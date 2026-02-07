import {useFrame} from "@react-three/fiber";
import {DoubleSide, Group, type Mesh} from "three";
import {useRef, useState} from "react";
import Sun from "./models/Sun.tsx";
import {Html, Line, useCursor} from "@react-three/drei";
import { useTransition, useSpring, animated } from '@react-spring/three'

export default function SunGroup(){
    const [hover, setHover] = useState(false);
    const meshRef = useRef<Mesh>(null!)
    const url = "https://docs.google.com/document/d/1aRAI3thIlpdJlXqOyzp41LANNzH5nz7OcpcrcVGc3ro/edit?usp=sharing"

    useFrame((_state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.1;
        }
    });
    useCursor(hover);

    const handleClick = () => {
        window.open(url, '_blank');
    }

    return (
        <>
            <group>
                <group>
                    <Sun
                        scale={hover ? .3 : .25}
                        ref={meshRef}
                        onPointerOver={() => setHover(true)}
                        onPointerOut={() => setHover(false)}
                        onClick={() => handleClick()}
                    />

                    <HoverRing hover={hover} />
                </group>

                <Line
                    points={[[0, 0, 0], [0, -1.2, 0], [0.5, -1.2, 0]]}
                    color="black"
                    opacity={.3}
                />
                <Html position={[0.5, -1, 0]}>
                    <div
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        onClick={() => handleClick()}
                        className={`${hover ? "scale-125" : ""} p-2 rounded-lg whitespace-nowrap bg-black/30 text-white select-none`}
                    >
                        [ RESUME ]
                    </div>
                </Html>
            </group>
        </>
    )
}

function HoverRing({ hover }: { hover: boolean }) {
    const transitions = useTransition(hover, {
        from: { scale: 0, opacity: 0 },
        enter: { scale: 1, opacity: 0.4 },
        leave: { scale: 0, opacity: 0 },
        config: { mass: 1, tension: 170, friction: 26 },
    })

    return transitions((styles, item) =>
        item ? <SpinningRing styles={styles} /> : null
    )
}

function SpinningRing({ styles }: { styles: any }) {
    const ringRef = useRef<Group>(null!)

    useFrame((state, delta) => {
        ringRef.current.rotation.z += delta
    })

    const chunks = [0, 1, 2, 3]
    const segmentLength = 1.309
    const offset = Math.PI / 2 - segmentLength

    return (
        <animated.group ref={ringRef} scale={styles.scale}>
            {chunks.map((i) => (
                <mesh key={i}>
                    <ringGeometry
                        args={[
                            0.7,           // innerRadius
                            0.8,           // outerRadius
                            32,            // thetaSegments
                            1,             // phiSegments
                            (i * segmentLength) + (i * offset), // thetaStart
                            segmentLength      // thetaLength
                        ]}
                    />
                    <animated.meshStandardMaterial
                        color="orange"
                        transparent
                        opacity={styles.opacity}
                        side={DoubleSide}
                    />
                </mesh>
            ))}
        </animated.group>
    )
}