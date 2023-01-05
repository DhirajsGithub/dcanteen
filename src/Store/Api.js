import React from "react";
import { useState } from "react";

const AuthContext = React.createContext({
  updateItemQuantity : () => {},
  items: [],
  changeItem: () => {},
});

const AuthContextProveider = (props) => {
  const [items, setItems] = useState([]);
  const [containItemIndex, setContainItemIndex] = useState(-1);

  const isItemPresent = (item)=>{
    let foundIndex = -1;
    let isContains = items.some((i, index)=>{
      let result = i.name == item.name;
      if(result){
        foundIndex = index;
      }
      setContainItemIndex(foundIndex)
      return result;
    })
    return isContains
  }

  const handleItemQuantity = (item) => {
    let isContains = isItemPresent(item);
    console.log(isContains)
    if(isContains){
      let p = items[containItemIndex];
      items[containItemIndex] = {...p, quantity : p.quantity + 1}
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
      value={{ items, handleItems, handleItemQuantity }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export {AuthContext};
export default AuthContextProveider;
