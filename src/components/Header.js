import { Box, Heading } from "@chakra-ui/react";

function Header({ title }) {
  return (
    <Box p={4} mt={4} shadow="md" bg="teal.500" color="white">
      <Heading>{title}</Heading>
    </Box>
  );
}
export default Header;
