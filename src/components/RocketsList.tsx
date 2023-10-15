import { useState, useEffect } from "react";
import { rocketsService } from "../api/rockets.service";
import { IRocket } from "../interfaces/Interfaces";
import { Box, Button, Center, Grid, Select, Text } from "@chakra-ui/react";
import RocketItem from "./RocketItem";

const RocketsList: React.FC = () => {
  const [rockets, setRockets] = useState<IRocket[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    rocketsService.getAll().then((rockets) => {
      setRockets(rockets);
      setIsLoading(false);
    });
  }, []);

  const totalPages = Math.ceil(rockets.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = rockets.slice(indexOfFirstItem, indexOfLastItem);
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const CartsInPageChange = (cartsNumber: string) => {
    setItemsPerPage(+cartsNumber);
    setCurrentPage(1);
  };

  return (
    <Box>
      <Select
        onChange={(e) => CartsInPageChange(e.target.value)}
        defaultValue={itemsPerPage}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
      </Select>
      <Grid
        flexDirection="row"
        templateColumns={`repeat(${itemsPerPage}, minmax(300px, 1fr))`}
      >
        {!isLoading ? (
          currentItems.map((rocket) => (
            <RocketItem
              wikipedia={rocket.wikipedia}
              success_rate_pct={rocket.success_rate_pct}
              cost_per_launch={rocket.cost_per_launch}
              rocket_id={rocket.rocket_id}
              rocket_name={rocket.rocket_name}
              key={rocket.rocket_id}
            />
          ))
        ) : (
          <Text fontWeight="bold" fontSize="3xl">
            Loading...
          </Text>
        )}
      </Grid>
      <Center mt={4}>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <Button
              key={page}
              variant={currentPage === page ? "solid" : "outline"}
              colorScheme={currentPage === page ? "blue" : "gray"}
              onClick={() => handlePageChange(page)}
              mx={1}
            >
              {page}
            </Button>
          )
        )}
      </Center>
    </Box>
  );
};

export default RocketsList;
