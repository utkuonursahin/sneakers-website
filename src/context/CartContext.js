import {createContext, useContext, useState} from "react";

const CartContext = createContext()
const CartProvider = ({children}) => {
  const [isCartClicked,setIsCartClicked] = useState(false);
  const values = {isCartClicked,setIsCartClicked}
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>
}
const useCart = () => useContext(CartContext)
export {CartProvider, useCart}