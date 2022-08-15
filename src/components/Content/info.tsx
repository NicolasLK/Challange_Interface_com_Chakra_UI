import {
    Flex,
    Heading,
    Icon,
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverCloseButton,
    PopoverContent,
    PopoverTrigger,
    Text
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { RiInformationLine } from "react-icons/ri";
import { api } from "../../../services/api";

interface ContinentsProps {
    id: string,
    countries: number,
    languages: number,
    cities: number
}

export function Info() {
    const [continents, setContinents] = useState<ContinentsProps[]>()

    useEffect(() => {
        api.get("/continents").then((res) => {
            setContinents(res.data)
        })
    }, [])

    return (
        <Flex
            align="center"
            justify="space-between"
        >
            {continents?.map((continent) => {
                return (<>
                    {window.location.pathname.includes(continent.id) &&
                        <>
                            <Flex
                                direction="column"
                                justify="center"
                                align={["flex-start", "flex-start", "center",]}
                            >
                                <Heading
                                    fontSize={[18, 48]}
                                    fontWeight="600"
                                    textAlign="center"
                                    color="yellow.400"
                                >
                                    {continent.countries}
                                </Heading>

                                <Text
                                    fontSize={[24, 24]}
                                    fontWeight="600"
                                    textAlign="center"
                                    color="gray.700"
                                >
                                    Paises
                                </Text>
                            </Flex>

                            <Flex
                                direction="column"
                                justify="center"
                                align={["flex-start", "flex-start", "center",]}
                            >
                                <Heading
                                    fontSize={[18, 48]}
                                    fontWeight="600"
                                    textAlign="center"
                                    color="yellow.400"
                                >
                                    {continent.languages}
                                </Heading>

                                <Text
                                    fontSize={[24, 24]}
                                    fontWeight="600"
                                    textAlign="center"
                                    color="gray.700"
                                >
                                    Línguas
                                </Text>
                            </Flex>

                            <Flex
                                direction="column"
                                justify="center"
                                align={["flex-start", "flex-start", "center",]}
                            >
                                <Heading
                                    fontSize={[18, 48]}
                                    fontWeight="600"
                                    textAlign="center"
                                    color="yellow.400"
                                >
                                    {continent.cities}
                                </Heading>

                                <Text
                                    fontSize={[24, 24]}
                                    fontWeight="600"
                                    textAlign="center"
                                    color="gray.700"
                                >
                                    Cidades +100
                                    <Popover>
                                        <PopoverTrigger>
                                            <span>
                                                <Icon
                                                    as={RiInformationLine}
                                                    cursor="pointer"
                                                    ml="1"
                                                    color="gray.400"
                                                    w={["10px", "16px"]}
                                                    h={["10px", "16px"]}
                                                />
                                            </span>
                                        </PopoverTrigger>
                                        <PopoverContent
                                            bg="gray.700"
                                            color="yellow.400"
                                        >
                                            <PopoverArrow />
                                            <PopoverCloseButton />
                                            <PopoverBody
                                                fontWeight="400"
                                                fontSize="lg"
                                            >
                                                AAAA, BBBBBB, CCCCC, DDDDDD, EEEEEE
                                            </PopoverBody>
                                        </PopoverContent>
                                    </Popover>
                                </Text>
                            </Flex>
                        </>

                    }
                </>

                )
            })}
        </Flex>
    )
}