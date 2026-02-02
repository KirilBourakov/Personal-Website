import Ship from "./models/Ship.tsx";

export default function CenterShip() {
    return (
        <group position={[0, 2, -2]}  >
            <Ship scale={.001} rotation={[0, Math.PI / 2, 0]}/>

            <mesh rotation={[0, 0, Math.PI / 2]} position={[.85, 0, 0]}>
                <cylinderGeometry args={[0.1, 0.01, .01]} />
                <meshStandardMaterial
                    emissive="cyan"
                    emissiveIntensity={1}
                    toneMapped={false}
                />
            </mesh>

            <spotLight rotation={[0, Math.PI / 2, 0]}/>
        </group>

    )
}