import { FC, useState, useEffect } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { rocketsService } from "../api/rockets.service";
import { IRocket } from "../interfaces/Interfaces";
import {
  Button,
  Text,
  Link as ChakraLink,
  Center,
  Box,
} from "@chakra-ui/react";
import RocketFullItem from "../components/RocketFullItem";

const RocketInfoPage: FC = () => {
  let { rocket_id } = useParams();
  const [rocket, setRocket] = useState<IRocket>();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    rocketsService.getOne(rocket_id).then((rocket) => {
      setRocket(rocket), setIsLoading(false);
    });
  }, []);

  return (
    <Box>
      {!isLoading ? (
        rocket ? (
          <RocketFullItem {...rocket} />
        ) : (
          <Center mt="5" flexDir="column">
            <Text fontSize="4xl" fontWeight="bold" mb="5">
              Page not found
            </Text>
            <ChakraLink as={ReactRouterLink} to={"/rockets/"}>
              <Button colorScheme="orange">Home</Button>
            </ChakraLink>
          </Center>
        )
      ) : (
        <Center fontWeight='bold' fontSize='3xl'>Loading...</Center>
      )}
    </Box>
  );
};

export default RocketInfoPage;
