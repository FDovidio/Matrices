import { Card, Image, Text, CardBody, CardFooter, Stack, Heading, Button } from '@chakra-ui/react'
import React, { useState } from 'react'



const ItemCount = () => {
const [count, setCount] = useState(0);

const sumar =()=>{ 
  if (count >= 10) {
      setCount(count + 1);
  }
}

const restar =()=>{
    if (count < 0) {
setCount(count - 1);
}
}

  return (
    <div className='cardContainer'>
    <div className='cardItem'>
<Card
  direction={{ base: 'column', md: 'row' }}
  overflow='hidden'
  variant='outline'

  
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', md: '200px' }}
    maxH={{ base: '100%', sm: '280px' }}
    src='https://d22fxaf9t8d39k.cloudfront.net/ba1e77d8d438601b898ab1f8395f70d19a15ddbe5b9c202d0eaa4e1b893dd4f619762.jpeg'
    alt='Mate'
  />

  <Stack >
    <CardBody>
      <Heading size='sm'>Mate</Heading>

      <Text py='2'>
        Mate de palo santo, forrado en cuero.
        <br/>
        El mate de palo santo le da un sabor unico a la infucion.
      </Text>
    </CardBody>
    <Stack spacing={4} direction='row' align='center' justify='center'>
    <Button colorScheme='teal' size='sm' onClick={restar} >
    -
  </Button>
  <p>{count}</p>
    <Button colorScheme='teal' size='sm' onClick={sumar} >
    +
  </Button>
    </Stack>   
    <CardFooter> 
      <Button variant='solid' colorScheme='green' justify='center' width='100%'>
        Comprar
      </Button>
    </CardFooter>
  </Stack>
</Card>
</div>
</div>
  )
}

export default ItemCount