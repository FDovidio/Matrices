import React from 'react'
import {createContext, useState} from 'react'

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    console.log(cart)
    const addItem = (item, cant) =>{
    setCart ([...cart, {...item, cant}])
    if (isInCart(item.id)) {
        console.log('ya esta en el carrito')
        setCart(cart.map((prodcut)=>{
            if (prodcut.id === item.id){
                prodcut.cant = prodcut.cant + cant
            }
            return prodcut;
    }))
    }else{
        setCart ([...cart, {...item, cant}])
    }}



const isInCart = (id) =>{
    return cart.some(item => item.id === id)
}

const removeItem = (id) =>{
    setCart(cart.filter(item => item.id !== id))
}

const clear =() =>{
    setCart([])
}

const cartQuantity =() =>{
    return cart.reduce((acc, item) => acc + item.cant, 0)
}

const total =()=>{
    return cart.reduce((acc, item) => acc + item.cant * item.price, 0)

}


    return(
    
    <CartContext.Provider value={{cart, addItem, removeItem, cartQuantity, clear, total}}>

        {children}
    </CartContext.Provider>
    
    )
}

export default ShoppingCartProvider