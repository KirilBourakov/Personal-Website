import {useThree} from "@react-three/fiber";
import {Box, Flex} from "@react-three/flex";
import {DestroyedPlanet} from "./models/DestroyedPlanet.tsx";

export default function MainLayout() {
    const { viewport } = useThree()

    return (
        <Flex
            flexDirection="row"
            justifyContent="flex-end"
            alignItems="flex-start"
            paddingTop={1.5}
            paddingRight={3}
            width={viewport.width}
            height={viewport.height}
            position={[-viewport.width / 2, viewport.height / 2, 0]}
        >
            <Box flexDirection="column">
                <Box centerAnchor scale={2} rotation={[-Math.PI / 2, 0, 0]}>
                    <DestroyedPlanet  />
                </Box>
            </Box>

        </Flex>
    )
}