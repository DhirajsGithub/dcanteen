import React from "react";
import { useState } from "react";

const AuthContext = React.createContext({
  updateItemQuantity : () => {},
  items: [],
  totalQuantity : 0,
});

const AuthContextProveider = (props) => {
  const [items, setItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const isItemPresent = (item)=>{
    let isContains = items.find((i => i.id == item.id))
    return isContains
  }

  const handleTotalQuantity = ()=>{
    let q = items.reduce((totalQuantity, curItem)=>{
      return totalQuantity + curItem.quantity;
    }, 1)
    return q
  }

  const handleItemQuantity = (item) => {
    let isContains = isItemPresent(item) != undefined ;
    let q = handleTotalQuantity();
    setTotalQuantity(q);
    if(isContains){
      for(let i=0; i<items.length; i++){
        if(items[i].id == item.id){
          items[i].quantity +=1;
        }
      }
    }else{
      handleItems(item)
    }
    return;
  };

  const handleItems = (item) => {
    setItems((prvItems) => {
      return [...prvItems, item ];
    });
  };
  return (
    <AuthContext.Provider
      value={{ items, handleItems, handleItemQuantity, totalQuantity }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export {AuthContext};
export default AuthContextProveider;
