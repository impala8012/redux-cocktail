import React from "react";
import styled from "styled-components";
import { Route, useLocation } from "react-router-dom";
import ProductOverview from "../../components/ProductOverview";

const ProductPageContainer = styled.div`

`
const ProductPage = () => {
  const location = useLocation()
    return (
      <ProductPageContainer>
        <Route
          exact
          path={`${location.pathname}`}
          component={ProductOverview}
        />
      </ProductPageContainer>
    );
}

export default ProductPage