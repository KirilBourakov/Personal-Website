import {useFrame, useThree} from "@react-three/fiber";
import {Box, Flex} from "@react-three/flex";
import {DestroyedPlanet} from "./models/DestroyedPlanet.tsx";
import {DoubleSide, type Mesh, Vector3} from "three";
import StdPlanet from "./StdPlanet.tsx";
import {Planet1} from "./models/Planet1.tsx";
import {useRef} from "react";
import DestroyedPlanetGroup from "./DestroyedPlanetGroup.tsx";

export default function MainLayout() {
    const { viewport } = useThree()

    return (
        <Flex
            flexDirection="row"
            justifyContent="flex-end"
            alignItems="flex-end"
            paddingTop={1.5}
            paddingRight={3}
            paddingBottom={1.5}
            width={viewport.width}
            height={viewport.height}
            position={[-viewport.width / 2, viewport.height / 2, 0]}
        >
            <Box flexDirection="column">
                <DestroyedPlanetGroup />
            </Box>

        </Flex>
    )
}