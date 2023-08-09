import React from 'react'
import { Card, Stack, Image, Heading, Text, Button, CardBody, CardFooter } from '@chakra-ui/react'
import { CartContext } from '../context/ShoppingCartContext'
import {useContext} from 'react'


const Cart = () => {

  const {cart} = useContext(CartContext)
  
  console.log(cart)
  return (
    <>
    {cart.map((item) => {
      return (
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={item.img}
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>The perfect latte</Heading>

      <Text py='2'>
        Caffè latte is a coffee beverage of Italian origin made with espresso
        and steamed milk.
      </Text>
    </CardBody>

    <CardFooter>
      <Button variant='solid' colorScheme='blue'>
        Buy Latte
      </Button>
    </CardFooter>
  </Stack>
</Card>
      )
})
}
</>
)

}

export default Cart