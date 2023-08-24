import React from "react";
import {
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
const Loader = () => {
  return (
    <Stack>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          padding="6"
          boxShadow="lg"
          bg="white"
          height="500px"
          width="300px"
          margin="10px"
        >
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" spacing="4" skeletonHeight="2" />
        </Box>
        <Box
          padding="6"
          boxShadow="lg"
          bg="white"
          height="500px"
          width="300px"
          margin="10px"
        >
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" spacing="4" skeletonHeight="2" />
        </Box>
        <Box
          padding="6"
          boxShadow="lg"
          bg="white"
          height="500px"
          width="300px"
          margin="10px"
        >
          <SkeletonCircle size="10" />
          <SkeletonText mt="4" spacing="4" skeletonHeight="2" />
        </Box>
      </SimpleGrid>
    </Stack>
  );
};

export default Loader;
