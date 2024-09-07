import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Heading,
  Image,
  Text,
  Spinner,
  Center,
  Flex,
  Stack,
  Tag,
  Divider,
  Button,
} from "@chakra-ui/react";
import axios from "axios";

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then(({ data }) => {
      setProduct(data);
      setLoading(false);
    });
  }, [id]);

  if (loading) {
    return (
      <Center mt={6}>
        <Spinner color="teal.500" />
      </Center>
    );
  }

  if (!product) {
    return (
      <Heading textAlign="center" p={200} color="red.500">
        Product not found
      </Heading>
    );
  }

  return (
    <Box p={8} maxW="container.lg" mx="auto" bg="gray.50" borderRadius="lg">
      <Button onClick={() => navigate(-1)} mb={6} colorScheme="red">
        Back
      </Button>
      <Flex direction={{ base: "column", md: "row" }} align="center">
        <Box flex="1" mr={{ base: 0, md: 8 }}>
          <Image
            src={product.image}
            alt={product.title}
            w="100%"
            maxH="400px"
            objectFit="contain"
            borderRadius="lg"
          />
        </Box>
        <Stack flex="1" spacing={4} mt={{ base: 6, md: 0 }}>
          <Heading size="lg" color="teal.800">
            {product.title}
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Price: <Tag colorScheme="teal">${product.price}</Tag>
          </Text>
          <Text fontSize="md" color="gray.700">
            Description: {product.description}
          </Text>
          <Divider />
          <Text fontSize="sm" color="gray.500">
            Category: {product.category}
          </Text>
          <Text fontSize="sm" color="gray.500">
            Rating: {product.rating.rate} ({product.rating.count} reviews)
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
}

export default Product;
