import { useEffect, useRef, useState } from "react";
import {
  Box,
  Heading,
  Stack,
  Button,
  Input,
  Text,
  Flex,
  Spacer,
  Tag,
  SimpleGrid,
  Image,
  Center,
  GridItem,
  Spinner,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Header from "./Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Product from "./Product";

const StoreItem = ({ title, price, image }) => {
  return (
    <Box p={4} borderRadius="lg" borderWidth="1px">
      <Center>
        <Image src={image} w={24} />
      </Center>
      <Heading noOfLines={2} size="sm" fontWeight="normal">
        {title}
      </Heading>
      <Spacer />

      <Tag mt={4}>$ {price}</Tag>
    </Box>
  );
};
function Store({ items, loading }) {
  const [filteredItems, setFilteredItems] = useState(items);
  useEffect(() => {
    setFilteredItems(items);
  }, [items]);
  return (
    <Box p={4}>
      {loading ? (
        <Center mt={6}>
          <Spinner />
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
      {/* <Input ref={itemNameRef} mt={10} placeholder="Item name" />
      <Input ref={itemPriceRef} mt={2} placeholder="Price" type="number" />
      <Button
        mt={2}
        onClick={() => {
          onItemAdd({
            title: itemNameRef.current.value,
            price: itemPriceRef.current.value,
          });
        }}
      >
        Add Item
      </Button> */}
    </Box>
  );
}
export default Store;
