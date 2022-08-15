import { Flex, Icon, Text, Box, useBreakpointValue } from "@chakra-ui/react"

import { FaGlassMartiniAlt, FaRegBuilding } from "react-icons/fa"
import { GiSurfBoard, GiAncientColumns, GiWorld } from "react-icons/gi"

export function Features() {
    const isMobile = useBreakpointValue({
        base: false,
        sm: true,
    })

    return (
        <Flex
            direction={["column", "row"]}
            align="center"
            justify="center"
            gap={["1", "20"]}
        >
            <Box
                p="4"
                my="6"
            >
                {isMobile ? <Icon
                    as={FaGlassMartiniAlt}
                    w="85px"
                    h="85px"
                    mb="6"
                    ml="4"
                    color="yellow.400"
                /> : <Text
                    color="yellow.400"
                    fontSize="4xl"
                    mr="2"
                >*</Text>}
                <Text
                    align="center"
                    fontWeight="600"
                    fontSize={24}
                    color="gray.700"
                >Vida noturna</Text>
            </Box>

            <Box
                p="2"
                my="4"
            >
                {isMobile ? <Icon
                    as={GiSurfBoard}
                    w="85px"
                    h="85px"
                    mb="6"
                    color="yellow.400"
                /> : <Text
                    color="yellow.400"
                    fontSize="4xl"
                    mr="2"
                >*</Text>}
                <Text
                    align="center"
                    fontWeight="600"
                    fontSize={24}
                    color="gray.700"
                >Praia</Text>
            </Box>

            <Box
                p="2"
                my="4"
            >
                {isMobile ? <Icon
                    as={FaRegBuilding}
                    w="85px"
                    h="85px"
                    mb="6"
                    color="yellow.400"
                /> : <Text
                    color="yellow.400"
                    fontSize="4xl"
                    mr="2"
                >*</Text>}
                <Text
                    align="center"
                    fontWeight="600"
                    fontSize={24}
                    color="gray.700"
                >Moderno</Text>
            </Box>

            <Box
                p="2"
                my="4"
            >
                {isMobile ? <Icon
                    as={GiAncientColumns}
                    w="85px"
                    h="85px"
                    mb="6"
                    color="yellow.400"
                /> : <Text
                    color="yellow.400"
                    fontSize="4xl"
                    mr="2"
                >*</Text>}
                <Text
                    align="center"
                    fontWeight="600"
                    fontSize={24}
                    color="gray.700"
                >Clássico</Text>
            </Box>

            <Box
                p="2"
                my="4"
            >
                {isMobile ? <Icon
                    as={GiWorld}
                    w="85px"
                    h="85px"
                    mb="6"
                    color="yellow.400"
                /> : <Text
                    color="yellow.400"
                    fontSize="4xl"
                    mr="2"
                >*</Text>}
                <Text
                    align="center"
                    fontWeight="600"
                    fontSize={24}
                    color="gray.700"
                >E mais...</Text>
            </Box>

        </Flex>
    )
}