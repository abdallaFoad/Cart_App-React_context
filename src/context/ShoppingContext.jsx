import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const ShoppingCardContext = createContext({});

const initialCardShopping = localStorage.getItem("shopping-card")
  ? JSON.parse(localStorage.getItem("shopping-card"))
  : [];

const ShoppingProvider = ({ children }) => {
  const [cardItems, setCardItems] = useState(initialCardShopping);
  useEffect(() => {
    localStorage.setItem("shopping-card", JSON.stringify(cardItems));
  }, [cardItems]);

  const getItemsQuantity = (id) => {
    return cardItems.find((item) => item.id === id)?.quantity || 0;
  };

  const inCreaseCardQuantity = (id) => {
    setCardItems((cards) => {
      if (cards.find((item) => item.id === id) == null) {
        return [...cards, { id, quantity: 1 }];
      } else {
        return cards.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const deCreaseCardQuantity = (id) => {
    setCardItems((cards) => {
      if (cards.find((item) => item.id === id) == null) {
        return cards.filter((item) => item.id !== id);
      } else {
        return cards.map((item) => {
          if (item.id === id) {
            if (item.quantity < 1) {
              return { ...item, quantity: 1 };
            }
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeItemFromCard = (id) => {
    setCardItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  };

  const removeAllItems = () => {
    setCardItems([]);
  };

  const cardQuantity = cardItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  return (
    <ShoppingCardContext.Provider
      value={{
        cardItems,
        getItemsQuantity,
        inCreaseCardQuantity,
        deCreaseCardQuantity,
        removeItemFromCard,
        removeAllItems,
        cardQuantity,
      }}
    >
      {children}
    </ShoppingCardContext.Provider>
  );
};
export const useShopping = () => {
  return useContext(ShoppingCardContext);
};
export default ShoppingProvider;
