import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const AuthContext = React.createContext({
  updateItemQuantity: () => {},
  items: [],
  totalQuantity: 0,
  user: [],
});

const AuthContextProveider = (props) => {
  const [items, setItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser({
      name: "Dhiraj Borse",
      address: {
        hostel: "Keeravani",
        floor: 2,
        roomNo: 301,
      },
      orders: {
        items: items,
      },
    });
  }, [items]);

  const isItemPresent = (item) => {
    let isContains = items.find((i) => i.id == item.id);
    return isContains;
  };

  const handleItemQuantity = (item) => {
    let isContains = isItemPresent(item) != undefined;
    let q = handleTotalQuantity();
    setTotalQuantity(q);
    if (isContains) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].id == item.id) {
          items[i].quantity += 1;
        }
      }
    } else {
      handleItems(item);
    }
    return;
  };

  const handleItems = (item) => {
    setItems((prvItems) => {
      return [...prvItems, item];
    });
  };

  const handleRemoveQuantity = (item) => {
    if (item.quantity <= 1) {
      handleRemoveItem(item);
    } else {
      for (let i = 0; i < items.length; i++) {
        if (items[i].id == item.id) {
          items[i].quantity -= 1;
        }
      }
    }
    let q = handleTotalQuantity();
    setTotalQuantity(q);
    return;
  };

  const handleAddQuantity = (item) => {
    for (let i = 0; i < items.length; i++) {
      if (items[i].id == item.id) {
        items[i].quantity += 1;
      }
    }
    let q = handleTotalQuantity();
    setTotalQuantity(q);
    return;
  };

  const handleRemoveItem = (item) => {
    for (let i = 0; i < items.length; i++) {
      if (items[i].id == item.id) {
        items.pop(i);
        break;
      }
    }
    let q = handleTotalQuantity();
    setTotalQuantity(q);
    return;
  };

  const handleTotalQuantity = () => {
    let q = items.reduce((totalQuantity, curItem) => {
      return totalQuantity + curItem.quantity;
    }, 0);
    setTotalQuantity(q);
    return q;
  };

  return (
    <AuthContext.Provider
      value={{
        items,
        handleItems,
        handleItemQuantity,
        totalQuantity,
        handleRemoveQuantity,
        handleRemoveItem,
        handleAddQuantity,
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
export default AuthContextProveider;
