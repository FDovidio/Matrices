import React from 'react'
import {createContext, useState} from 'react'

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (item, cant) =>{
        console.log (item, cant)
    setCart ([...cart, {...item, cant}])
}

    return(
    
    <CartContext.Provider value={{cart, addItem}}>

        {children}
    </CartContext.Provider>
    
    )
}

export default ShoppingCartProvider