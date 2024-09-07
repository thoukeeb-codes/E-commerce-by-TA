import { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Input,
  Spacer,
  Tag,
  SimpleGrid,
  Image,
  Center,
  GridItem,
  Spinner,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import StoreItem from "./StoreItem";

function Store({ items, loading }) {
  const [filteredItems, setFilteredItems] = useState(items);
  useEffect(() => {
    setFilteredItems(items);
  }, [items]);
  return (
    <Box p={4} bg="gray.50">
      {loading ? (
        <Center mt={6}>
          <Spinner color="teal.500" />
        </Center>
      ) : (
        <Box p={2}>
          <Input
            onChange={(e) => {
              let f = items.filter((item) =>
                item.title.toLowerCase().includes(e.target.value.toLowerCase())
              );
              setFilteredItems(f);
            }}
            placeholder="Search"
            mt={4}
            bg="white"
            borderColor="teal.200"
          />
          <SimpleGrid columns={4} spacing={4} mt={4} p={2}>
            {filteredItems.map((item) => {
              return (
                <GridItem>
                  <Link to={`/product/${item.id}`}>
                    <StoreItem
                      {...item} /*title={item.title} price={item.price}*/
                    />
                  </Link>
                </GridItem>
              );
            })}
          </SimpleGrid>
        </Box>
      )}
    </Box>
  );
}

export default Store;
