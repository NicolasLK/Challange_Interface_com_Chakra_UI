import { Grid, Flex, Image, Icon } from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/router"
import { RiArrowLeftSLine } from "react-icons/ri"



export function Header() {
    const { asPath } = useRouter()
    const notHomePage = asPath !== "/"

    return (
        <Flex
            as="header"
            bg="white"
            w="100%"
            mx="auto"
            px="1rem"
            h={["50px", "100px"]}
            align="center"
            justify="center"
        >
            <Grid
                h="100%"
                mx="auto"
                w="100%"
                maxW="1160px"
                alignItems="center"
                templateColumns="reapet(3, 1fr)"
                margin="auto"
            >

                {notHomePage && (
                    <Link href="/">
                        <a
                            style={{
                                maxWidth: "fit-content"
                            }}
                        >
                            <Icon
                                as={RiArrowLeftSLine}
                                fontSize={[20, 40]}
                                justifySelf="start"
                            />
                        </a>
                    </Link>
                )}

                <Image
                    w={["80px", "185px"]}
                    src="/Logo.png"
                    alt="WorldTrip"
                    gridColumn="2"
                />
            </Grid>

        </Flex>



    )
}