import React,{useState} from "react";
import {useDispatch} from "react-redux"
import {addNewProduct} from "../../redux/reducers/products/productAction"
import styled from "styled-components";
import FormInput from "../../components/FormInput";
import FormSelectInput from "../../components/FormSelectInput";
import Modal from "../../components/Modal";
const AdminContainer = styled.div`
  margin: 50px auto;
  width: 380px;
  display: flex;
  flex-direction: column;
  h2 {
    margin: 10px 0;
  }
`;

const CallModalContainer = styled.div`
  display: inline-block;
  width: 100%;
  padding: 0;
  margin: 0 auto;
  ul,
  li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  ul {
    li {
      display: inline-block;
    }
  }
`;

const AdminPage = () => {
  const dispatch = useDispatch();
  const [hideModal, setHideModal] = useState(true);
  const [productCategory, setProductCategory] = useState("gin");
  const [productName, setProductName] = useState("");
  const [productThumbnail, setProductThumbnail] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDesc, setProductDesc] = useState("");

  const toggleModal = () => setHideModal(!hideModal);
   const configModal = {
     hideModal,
     toggleModal,
   };

   const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addNewProduct({
        productCategory,
        productName,
        productThumbnail,
        productPrice,
        productDesc,
      })
    );
   }
    return (
      <AdminContainer>
        <CallModalContainer>
          <ul>
            <li>
              <button onClick={() => toggleModal()}>新增商品</button>
            </li>
          </ul>
        </CallModalContainer>

        <Modal {...configModal}>
          <div>
            <form onSubmit={handleSubmit}>
              <h2>新增商品</h2>
              <FormSelectInput
                label="category"
                options={[
                  { value: "gin", name: "gin" },
                  { value: "whisky", name: "whisky" },
                ]}
                handleChange={(e) => setProductCategory(e.target.value)}
              />
              <FormInput
                label="name"
                type="text"
                value={productName}
                handleChange={(e) => setProductName(e.target.value)}
              />
              <FormInput
                label="image URL"
                type="url"
                value={productThumbnail}
                handleChange={(e) => setProductThumbnail(e.target.value)}
              />
              <FormInput
                label="price"
                type="number"
                min="0"
                max="9999"
                value={productPrice}
                handleChange={(e) => setProductPrice(e.target.value)}
              />
              <FormInput
                label="desc"
                type="textarea"
                value={productDesc}
                handleChange={(e) => setProductDesc(e.target.value)}
              />
              <button type="submit">新增商品</button>
            </form>
          </div>
        </Modal>
      </AdminContainer>
    );
}

export default AdminPage