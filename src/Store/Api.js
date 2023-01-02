import React from "react";
import { useState } from "react";

const AuthContext = React.createContext({
  itemsCount: 0,
  ChangeItemsCount: () => {},
  items: {},
  changeItem: () => {},
});

const AuthContextProveider = (props) => {
  const [items, setItems] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);

  const handleItemsCount = () => {
    setItemsCount((prvCount) => {
      return prvCount + 1;
    });
  };

  const handleItems = (item) => {
    setItems((prvItems) => {
      return [...prvItems, item ];
    });
  };
  return (
    <AuthContext.Provider
      value={{ itemsCount, items, handleItems, handleItemsCount }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export {AuthContext};
export default AuthContextProveider;
