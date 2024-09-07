import React from "react";
import { Box, Heading, Spacer, Tag, Image, Center } from "@chakra-ui/react";

const StoreItem = ({ title, price, image }) => {
  return (
    <Box
      p={4}
      borderRadius="lg"
      borderWidth="1px"
      h="250px"
      bg="teal.50"
      _hover={{ bg: "teal.100" }}
    >
      <Center>
        <Box w="100px" h="100px" overflow="hidden">
          <Image src={image} w="100%" h="100%" objectFit="contain" />
        </Box>
      </Center>
      <Heading
        noOfLines={2}
        size="sm"
        fontWeight="normal"
        mt={2}
        textOverflow="ellipsis"
        overflow="hidden"
        whiteSpace="nowrap"
        color="teal.800"
      >
        {title}
      </Heading>
      <Spacer />
      <Tag mt={4} colorScheme="teal">
        ${price}
      </Tag>
    </Box>
  );
};

export default StoreItem;
