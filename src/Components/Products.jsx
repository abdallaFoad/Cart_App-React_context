import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import {dataInfo} from  '../data/StoreData';
import Col from 'react-bootstrap/esm/Col';
import StoreItem from './StoreItem';


const Products = () => {
  return (
    <div className="store">
      <Container>
        <div className="title" style={{fontSize:'1.3rem', fontWeight:'bold'}}>Products</div>
        <Row lg={3} md={2} xs={1}>
          {dataInfo.map((e) => {
            return (
              <Col key={e.id}>
                <StoreItem {...e} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Products;