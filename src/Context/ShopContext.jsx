import  { createContext, useState } from 'react'
import all_product from '../assets/all_peoducts'
import Cart from '../Pages/Cart'
import Items from '../Components/Items/Items'
export const ShopingContext = createContext()

const ShopContext = (props) => {

      const Getdeaultcart = ()=>{
      let cart = {}
      for (let index = 0; index < all_product.length+1; index++) {
        cart[index] = 0
        
      }
      return cart;
    }
    
    const [CartItems, setCartItems] = useState(Getdeaultcart)


    const addtocart =(ItemId)=>{
      setCartItems((prev)=>({...prev ,[ItemId]: prev[ItemId]+1})
      )
      console.log(CartItems);
      
    }
         const removeFromcart =(ItemId)=>{
      setCartItems((prev)=>({...prev ,[ItemId]: prev[ItemId]-1})
      )
    }
    const getTotalCartItems = () => {
  let totalItem = 0;

  for (const item in CartItems) {
    if (CartItems[item] > 0) {
      totalItem += CartItems[item];
    }
  }

  return totalItem;
};

    const contextValue = {all_product , CartItems , addtocart , removeFromcart ,   getTotalCartItems,}
 
  return (
    <div>
        <ShopingContext.Provider value={contextValue}>
     {props.children}
        </ShopingContext.Provider>
    </div>
  )
}

export default ShopContext