import React from "react";
import { connect, useSelector } from "react-redux";
import styled from "styled-components";
import { Inventory } from "../../store/inventory/types";
// import { addToCart } from "../../store/cart/action";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";

//const invesntory = useSelector(state => state.inventory);

const ProductContainer = styled.div`
  background-color: #eeeeee;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin: 15px;
  cursor: pointer;
  flex: 0 0 25%;
`;

// https://www.w3schools.com/tags/tag_figure.asp
const ProductFigure = styled.figure`
  width: 230px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;

const ProductHeader = styled.h1`
  height: 76px;
`;

const ProductDescriptionDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductBrandText = styled.text``;

// const AddToCart = styled.button`
//   padding: 10px;
//   background-color: blue;
//   color: #ffffff;
//   border-radius: 10px;
// `;

interface propsFromComponent {
  item: Inventory;
}

 interface propsFromDispatch {
//   addToCart: (item: any) => any;
 }

type ProductItemProps = propsFromComponent & propsFromDispatch;

const ProductItem: React.FC<ProductItemProps> = ({ item }) => {
  // const AddItemToCart = (item: any) => {
  //   addToCart(item);
  // };

  return (
    <ProductContainer>
      <ProductFigure>
        <ProductImage src={item.image} />
      </ProductFigure>
      <ProductHeader>{item.name}</ProductHeader>
      <ProductDescriptionDiv>
        <ProductBrandText>{item.brand}</ProductBrandText>
        {/* <AddToCart onClick={() => AddItemToCart(item)}>Add To Cart</AddToCart> */}
      </ProductDescriptionDiv>
    </ProductContainer>
  );
};

// to do update these to use selector
const mapStateToProps = () => {};

const mapDispatchToProps = () => {
  return {
    // addToCart: (item: any) => dispatch(addToCart(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
