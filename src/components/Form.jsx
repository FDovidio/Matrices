import React from 'react'
import { useState } from 'react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button
} from '@chakra-ui/react'

const Form = () => {

  const [input, setInput] = useState('')

  const handleInputChange = (e) => setInput(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    input === "" ?  alert ("Complete todos los campos") : alert(`El correo ${input} fue enviado`)
  }
  return (
    <form onSubmit={handleSubmit}>
      <FormLabel>Numero de tarjeta</FormLabel>
      <Input type='text' value={input} onChange={handleInputChange} />
      <FormLabel>Nombre</FormLabel>
      <Input type='text' value={input} onChange={handleInputChange} />
      <FormLabel>Fecha de expiracion</FormLabel>
      <Input type='text' value={input} onChange={handleInputChange} />
      <FormLabel>CVV</FormLabel>
      <Input type='text' value={input} onChange={handleInputChange} />
      <Button type='submit'>Enviar</Button>
    </form>
    
  )
}

export default Form