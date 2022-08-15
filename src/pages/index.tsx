import { Flex, Divider, Heading } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Slides } from "../components/Slides";
import { Banner } from "../components/Banner";
import { Features } from "../components/Features";
import { api } from "../../services/api";
import { GetStaticProps } from "next";

// interface ContinentsProps {
//   id: string,
//   title: string,
//   description: string,
//   image: string,
//   bio: string,
//   countries: number,
//   languages: number,
//   cities: number,
// }

export default function Home({ continents }) {

  return (

    <Flex
      direction="column"
    >
      <Header />
      <Banner />

      <Features />

      <Divider
        orientation="horizontal"
        w={["60px", "90px"]}
        mx="auto"
        h="2px"
        bg="gray.700"
        my={["9", "20"]}
      />

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={["5", "14"]}
        fontSize={["lg", "3xl", "4xl"]}
        color="gray.700"
      >
        Vamos nessa? <br /> Então escolha seu continente
      </Heading>

      <Slides continents={continents} />

    </Flex>
  )
}


export const getStaticProps: GetStaticProps = async () => {
  const response = await api.get("/continents")
  const data = await response.data


  return {
    props: {
      continents: data,
    }
  }
}

