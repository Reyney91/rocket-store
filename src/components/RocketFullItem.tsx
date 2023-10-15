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
          {/* <Flex justifyContent='space-between'>
            <Box width='50%' justifyItems='legacy'>
              <Text>cost per launch:</Text>
              <Text>first flight:</Text>
              <Text>Country:</Text>
              <Text>description:</Text>
              <Text>success rate: </Text>
              <Text>height: </Text>
              <Text>mass: </Text>
            </Box>
            <Box width='50%'>
              <Badge colorScheme="green" ml="2">
                ${rocket.cost_per_launch}
              </Badge>
              <Text>{rocket.first_flight}</Text>
              <ChakraLink
                target="_blank"
                as={ReactRouterLink}
                to={"https://www.google.ru/search?q=" + rocket.country}
              >
                <Text color="blue.600">{rocket.country}</Text>
              </ChakraLink>
              <Text ml={2} as="i">
                {rocket.description}
              </Text>
              <Text>{rocket.success_rate_pct}</Text>
              <Text>{rocket.height.meters} meters</Text>
              <Text>{rocket.mass.kg} kg</Text>
            </Box>
          </Flex> */}
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
          <Text as="i">
            description: {rocket.description}
          </Text>
          <Text>success rate: {rocket.success_rate_pct}</Text>
          <Text>height: {rocket.height.meters} meters</Text>
          <Text>mass: {rocket.mass.kg} kg</Text>
        </CardBody>
      </Card>
    </Center>
  );
};

export default RocketFullItem;
