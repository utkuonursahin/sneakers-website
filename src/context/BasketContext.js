import {createContext, useContext, useState} from "react";

const BasketContext = createContext()
const BasketProvider = ({children}) => {
  const [basket,setBasket] = useState(null)
  const [count,setCount] = useState(0)
  const handleCount = function (e){
    const target = e.target.getAttribute('alt')
    if(target === 'Icon-plus') setCount(c => c+1);
    else if(target === 'Icon-minus' && count > 0) setCount(c => c-1)
  }
  const values = {basket,setBasket,count,setCount,handleCount}
  return <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
}
const useBasket = () => useContext(BasketContext)
export {BasketProvider, useBasket}