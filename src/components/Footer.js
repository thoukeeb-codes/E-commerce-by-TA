import { Box, Heading } from "@chakra-ui/react";

function Footer() {
  return (
    <Box p={4} shadow="md">
      <Heading
        size="sm"
        bg={"gray"}
        p={3}
        rounded="md"
        textAlign="center"
        color="#cfcdcc"
      >
        Made By Thoukeeb Ali
      </Heading>
    </Box>
  );
}
export default Footer;
