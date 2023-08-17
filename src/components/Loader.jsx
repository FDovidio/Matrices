import React from 'react'
import { Skeleton, SkeletonCircle, SkeletonText, Stack } from '@chakra-ui/react'
const Loader = () => {
  return (
    <Stack  >
  <Skeleton height='30vh' />
    <Skeleton height='30vh' />
    <Skeleton height='30vh' />
</Stack>
  )
}

export default Loader