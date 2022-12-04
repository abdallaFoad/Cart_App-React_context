import React from "react";
import { useShopping } from "../context/ShoppingContext";
import { dataInfo } from "../data/StoreData";
import formatCurrency from "./FormatCurrency";

const CardStore = ({ id, quantity }) => {
  const {
    inCreaseCardQuantity,
    deCreaseCardQuantity,
    removeItemFromCard,
  } = useShopping();
  let store = dataInfo.find((i) => i.id === id);
  return (
    <>
      <div className="card" key={store.id}>
        <img src={store.img} alt={store.name} />
        <div className="title">
          <h3>{store.name}</h3>
        </div>
        <div className="sum">
          <div className="negative" onClick={() => inCreaseCardQuantity(id)}>
            +
          </div>
          <div className="num">{quantity}</div>
          <div className="positive" onClick={() => deCreaseCardQuantity(id)}>
            -
          </div>
        </div>
        <div className="info">
          <div className="price">{formatCurrency(store.price * quantity)}</div>
          <div className="remove" onClick={() => removeItemFromCard(id)}>
            Remove
          </div>
        </div>
      </div>
    </>
  );
};

export default CardStore;
