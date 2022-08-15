import { Flex, Heading, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { Navigation, Pagination, A11y } from "swiper"
import Link from "next/link";

SwiperCore.use([Navigation, Pagination, A11y])


export function Slides({ continents }) {

    return (
        <Flex
            w="100%"
            maxW="1240px"
            mx="auto"
            mb={["5", "10"]}
            h={["250px", "450px"]}
        >
            <Swiper
                slidesPerView={1}
                navigation
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 3000,
                }}
                style={{
                    width: "100%",
                    flex: "1",
                }}
            >
                {continents?.map((continent) => {
                    return (
                        <SwiperSlide
                            key={continent.id}
                        >
                            <Flex
                                w="100%"
                                h="100%"
                                align="center"
                                justify="center"
                                direction="column"
                                bgImage={`url(${continent.image})`}
                                bgRepeat="no-repeat"
                                bgSize="cover"
                                textAlign="center"
                                bgPosition="center"
                            >
                                <Link href={`/continents/${continent.id}`}>
                                    <a>
                                        <Heading
                                            color="gray.100"
                                            fontWeight="700"
                                            fontSize={[24, 48]}
                                        >
                                            {continent.title}
                                        </Heading>
                                        <Text
                                            color="gray.300"
                                            fontWeight="700"
                                            fontSize={[14, 24]}
                                        >
                                            {continent.description}
                                        </Text>
                                    </a>
                                </Link>
                            </Flex>
                        </SwiperSlide>
                    )
                })}
            </Swiper>

        </Flex>
    )
}


