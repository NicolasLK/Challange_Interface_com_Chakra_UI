import { Box, Flex, Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { api } from "../../../services/api"

interface ContinentsProps {
    id: string,
    title: string,
    image: string,
}


export function ContinentsBanner() {
    const [continents, setContinents] = useState<ContinentsProps[]>()

    useEffect(() => {
        api.get("/continents").then((res) => {
            setContinents(res.data)
        })
    }, [])

    return (
        <>
            {continents?.map((continent) => {
                return (<>
                    {window.location.pathname.includes(continent.id) &&
                        <Flex
                            key={continent.id}
                            w="100%"
                            h={["150px", "300px", "500px"]}
                            px={["0", "0", "36"]}
                            pt={["0", "0", "72"]}
                            bgImage={`url(${continent.image})`}
                            bgPosition="center"
                            bgRepeat="no-repeat"
                            bgSize="cover"
                            align="center"
                            justify={["center", "center", "flex-start"]}
                        >
                            <Heading
                                textAlign={["center", "left"]}
                                fontSize={["28px", "48px"]}
                                fontWeight="600"
                                color="gray.100"
                            >
                                {continent.title}
                            </Heading>
                        </Flex>}

                </>
                )
            })}
        </>
    )
}