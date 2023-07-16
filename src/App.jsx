import React from 'react'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'

const App = () => {

  return (
    <>
    <div className='bodyApp'>
    <Navbar />
    <ItemListContainer
    greeting= "Bienvenidos a Matrices"
    />
    </div>
    </>
  )
}

export default App
