import {Vector3} from "three";
import StdPlanet from "./StdPlanet.tsx";
import {useThree} from "@react-three/fiber";

export default function BackPlanet(){
    const { viewport, camera } = useThree()

    const radius = .8

    const xPos = -5
    const yPos = -2


    return (
        <StdPlanet texture_path={"materials/gaseous.png"} radius={radius} speed={.2} position={new Vector3(xPos, -yPos, 0)} />
    )
}