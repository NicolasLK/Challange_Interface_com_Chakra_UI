import { Grid, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { api } from "../../../services/api";
import { Info } from "./info";


interface ContinentsProps {
    id: string,
    bio: string,
}




export function Content() {
    const [continents, setContinents] = useState<ContinentsProps[]>()


    useEffect(() => {
        api.get("/continents").then((res) => {
            setContinents(res.data)
        })
    }, [])



    return (
        <Grid
            templateColumns={["1fr", "1fr", "1fr 1fr", "1.2fr 1fr"]}
            gap={[5, 10, 16, 20]}
            my={["8", "20"]}
        >
            {continents?.map((continent) => {
                return (<>
                    {window.location.pathname.includes(continent.id) &&
                        <Text
                            key={continent.id}
                            fontSize={[12, 20]}
                            fontWeight="400"
                            textAlign="justify"
                            color="gray.700"
                        >
                            {continent.bio}
                        </Text>}
                </>

                )
            })}
            <Info />
        </Grid>
    )
}