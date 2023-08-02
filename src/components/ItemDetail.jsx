import { Card, Stack, Heading, Text, Image, Button, ButtonGroup, CardBody, CardFooter } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'


const ItemDetail = ({productos}) => {

const {id} = useParams()

const filteredProduct = productos.find(articulo => articulo.id === id)



  return (
    <>
    {filteredProduct.map((articulo) =>{
<Card
  direction='row'
  overflow='hidden'
  variant='outline'
>
  <div className='imagenItemSelect'>
  <Image
    objectFit='cover'
    height='100%'
    src= {articulo.imagen}
    alt={nombre}
    />
</div>  

  <Stack>

    <CardBody  height='100%' display='flex' flexDirection='column' padding='30px' fontSize= '30'>
      <Heading size='xl'>{nombre}
      </Heading>

      <Text py='2'>
        {descripcion}
      </Text>
    </CardBody>
    
    <CardFooter justifyContent='end'   >
    <Button variant='solid' bg="#9fac82"  >
        Comprar {nombre}
      </Button>
    </CardFooter>
    
  </Stack>
  
</Card>
    
    })}
    </>
  )
  
}


export default ItemDetail