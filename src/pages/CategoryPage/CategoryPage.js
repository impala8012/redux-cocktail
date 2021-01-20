import React from "react"
import { useSelector } from "react-redux";
import { selectProductData } from "../../redux/reducers/products/productSelectors";
import Product from "../../components/Product"
import styled from "styled-components"
import { useParams } from "react-router-dom";

const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;


const CollectionTitle = styled.h2`
  font-size: 38px;
  margin: 0 auto 30px;
`;

const CollectionItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  & > div {
    margin-bottom: 30px;
  }
`;

const CategoryPage = () => {
  const products = useSelector(selectProductData);
  const { id } = useParams()
  const catrgoryProducts = products[id];
  // console.log("catrgoryProducts", catrgoryProducts);
  // console.log("id", id)
    return (
      <CollectionPageContainer>
        <CollectionTitle>{catrgoryProducts.title}</CollectionTitle>
        <CollectionItemsContainer>
          {catrgoryProducts.items
            .map((item) => (
              <Product key={item.id} item={item} />
            ))}
        </CollectionItemsContainer>
      </CollectionPageContainer>
    );
}

export default CategoryPage;