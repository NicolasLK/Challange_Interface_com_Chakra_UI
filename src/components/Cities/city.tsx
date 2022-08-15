import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";


interface CitiesProps {
    id: string,
    name: string,
    banner: string,
    country: string,
    flag: string,
    continent: string
}



export function City() {
    const [cities, setCities] = useState<CitiesProps[]>()

    useEffect(() => {
        api.get("/cities").then((res) => {
            setCities(res.data)
        })
    }, [])

    return (
        <Box
            borderRadius="4px"
            overflow="hidden"
        >
            <Image
                src="/Banner.png"
                h="170px"
                w="100%"
            />

            <Flex
                p="6"
                align="center"
                justify="space-between"
                bg="white"
                border="1px"
                borderColor="yellow.300"
                borderTop="0"
            >
                <Flex
                    direction="column"
                >
                    <Heading
                        fontFamily="Barlow"
                        fontWeight="600"
                        fontSize={[20, 20]}
                        color="gray.700"
                    >
                        Londres
                    </Heading>
                    <Text
                        fontFamily="Barlow"
                        fontWeight="500"
                        fontSize={[16, 16]}
                        color="gray.500"
                        mt="3"
                    >
                        Reino Unido
                    </Text>
                </Flex>
                <Image
                    src="/Banner.png"
                    w="30px"
                    h="30px"
                    borderRadius="50%"
                    objectFit="cover"
                />
            </Flex>
        </Box>
    )
}