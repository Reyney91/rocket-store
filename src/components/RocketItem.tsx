import {
  Badge,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { ICart } from "../interfaces/Interfaces";

const RocketItem: React.FC<ICart> = ({
  success_rate_pct,
  cost_per_launch,
  rocket_id,
  rocket_name,
  wikipedia,
}: ICart) => {
  return (
    <Card
      fontSize={["lg", "xl", "2xl"]}
      boxShadow="dark-lg"
      m={["7", "7", "10"]}
    >
      <CardBody>
        <Stack mt="6" spacing="3">
          <Heading fontSize={["3xl", "3xl", "4xl"]}>{rocket_name}</Heading>
          <Text>Success rate:{success_rate_pct}</Text>
          <Text>
            Cost per launch:
            <Badge colorScheme="green" ml="2">
              ${cost_per_launch}
            </Badge>
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <ButtonGroup spacing="3">
          <ChakraLink as={ReactRouterLink} to={"/rockets/" + rocket_id}>
            <Button
              p={["3", "4", "5"]}
              size={["lg", "xl", "xl"]}
              colorScheme="orange"
            >
              More
            </Button>
          </ChakraLink>
          <ChakraLink target="_blank" as={ReactRouterLink} to={wikipedia}>
            <Button
              p={["3", "4", "5"]}
              size={["lg", "xl", "xl"]}
              colorScheme="orange"
              variant="outline"
            >
              To Wiki
            </Button>
          </ChakraLink>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default RocketItem;
