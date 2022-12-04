import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useShopping } from "../context/ShoppingContext";
import "../style/StoreItem.css";
import formatCurrency from "./FormatCurrency";

const StoreItem = ({ id, img, name, price }) => {
  const {
    getItemsQuantity,
    inCreaseCardQuantity,
    deCreaseCardQuantity,
    removeItemFromCard,
  } = useShopping();
  const quantity = getItemsQuantity(id);
  return (
    <Card style={{ margin: "1rem auto" }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>
          <div>{name}</div>
          <div style={{ color: "#ff5722" }}>{formatCurrency(price)}</div>
        </Card.Title>
        {quantity > 0 ? (
          <>
            <div className="sum">
              <Button
                variant="secondary"
                onClick={() => inCreaseCardQuantity(id)}
              >
                +
              </Button>
              Added
              <div className="num">{quantity}</div> In Box
              <Button
                variant="secondary"
                onClick={() => deCreaseCardQuantity(id)}
              >
                -
              </Button>
            </div>
            <Button
              variant="danger"
              style={{ margin: "1rem auto", width: "100%" }}
              onClick={() => removeItemFromCard(id)}
            >
              Remove
            </Button>
          </>
        ) : (
          <Button
            style={{ margin: "1rem auto", width: "100%" }}
            onClick={() => inCreaseCardQuantity(id)}
          >
            Add
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
