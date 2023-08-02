
import { SimpleGrid } from '@chakra-ui/react'
import Item from './Item'



const ItemList = ({articulos}) => {




  
  return (  
    <div className='contenedorItem'>
    { 
          articulos.map((producto) =>    
          <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'   >

    <div key={producto.id}>
    <Item 
    nombre={producto.nombre}
    precio={producto.precio}
    imagen={producto.img}
    id={producto.id}
    
    />
    </div>
    </SimpleGrid>
)
    }
    
    </div>
    
  )
  }

export default ItemList