import React from 'react'
import Container from "react-bootstrap/esm/Container";
import { useShopping } from '../context/ShoppingContext';
import { dataInfo } from "../data/StoreData"; 
import "../style/Box.css";
import CardStore from './CardStore';
import formatCurrency from './FormatCurrency';


const Box = () => {
  const { cardItems, removeAllItems } = useShopping();
  return (
    <div className="store">
      <Container>
        <div className="head d-flex align-items-center justify-content-between w-100">
          <h1>Your Box</h1>
          <div className="remove-all" onClick={removeAllItems}>
            Remove All
          </div>
        </div>
        <div className="cards">
          {cardItems.map((e) => {
            return <CardStore key={e.id} {...e} />;
          })}
        </div>
        <div className="total">
          <div>
            Sub-Total <div className='length'>{cardItems.length}</div>{" "}
          </div>
          <div>
            {formatCurrency(
              cardItems.reduce((acc, current) => {
                const item = dataInfo.find((i) => i.id === current.id);
                return acc + (item?.price || 0) * current.quantity;
              }, 0)
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Box