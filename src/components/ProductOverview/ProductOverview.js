import React from "react";
import { useSelector } from "react-redux";
import { selectProductData } from "../../redux/reducers/products/productSelectors";
import styled from "styled-components";
import ProductPreview from "../ProductPreview";
const  ProductOverViewContainer = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
`

const ProductOverView = () => {
  const productsObj = useSelector(selectProductData)
  const products = productsObj
    ? Object.keys(productsObj).map((key) => productsObj[key])
    : [];
  // console.log("products", products)
    return(
      <ProductOverViewContainer>
        {
          products.map(product => (
            <ProductPreview  key={product.id} product={product}/>
          ))
        }
      </ProductOverViewContainer>
    )
}

export default ProductOverView;