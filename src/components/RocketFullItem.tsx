import {
  Card,
  Text,
  CardHeader,
  Button,
  Heading,
  CardBody,
  Link as ChakraLink,
  Center,
  Badge,
  Box,
  Flex,
} from "@chakra-ui/react";
import { Link as ReactRouterLink } from "react-router-dom";
import { IRocket } from "../interfaces/Interfaces";

const RocketFullItem: React.FC<IRocket> = (rocket: IRocket) => {
  return (
    <Center>
      <Card
        fontSize={["lg", "xl", "2xl"]}
        maxW={["xs", "xl", "4xl"]}
        mx="7"
        mt="5"
      >
        <CardHeader mx="7">
          <ChakraLink float="right" as={ReactRouterLink} to={"/rockets/"}>
            <Button colorScheme="orange">Back</Button>
          </ChakraLink>
          <Heading>{rocket.rocket_name}</Heading>
        </CardHeader>
        <CardBody>
          <Box>
            <Text>
              cost per launch:
              <Badge colorScheme="green" ml="2">
                ${rocket.cost_per_launch}
              </Badge>
            </Text>
          </Box>
          <Text>first flight: {rocket.first_flight}</Text>
          <Flex>
            Country:
            <ChakraLink
              ml="2"
              target="_blank"
              as={ReactRouterLink}
              to={"https://www.google.ru/search?q=" + rocket.country}
            >
              <Text color="blue.600">{rocket.country}</Text>
            </ChakraLink>
          </Flex>
          <Text as="i">description: {rocket.description}</Text>
          <Text>success rate: {rocket.success_rate_pct}</Text>
          <Text>height: {rocket.height.meters} meters</Text>
          <Text>mass: {rocket.mass.kg} kg</Text>
        </CardBody>
      </Card>
    </Center>
  );
};

export default RocketFullItem;
