import { Heading, VStack } from "@chakra-ui/react";
import RocketsList from "../components/RocketsList";

const Catalog = () => {
  return (
    <VStack mt="8">
      <Heading>Rockets Catalog</Heading>
      <RocketsList />
    </VStack>
  );
};

export default Catalog;
