import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ImageGallery from './components/ImageGallery';
import ProductInformation from './components/ProductInformation';
import StyleSelector from './components/StyleSelector';
import AddToCart from './components/AddToCart';
import ProductOverview from './components/ProductOverview';

// 25167
const tempProductID = 25171;

const getData = (callback) => {
  axios.get(`/products/${tempProductID}`)
    .then((product) => {
      callback(product.data);
    })
    .catch((err) => {
      console.log(`Failed to fetch data from the server: ${err}`);
    });
};

const Body = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 15px;
`;

const LeftColumn = styled.div`
  display: flex;
  width: 75%;
  border: 10px;
  height: 100%;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  border: 10px;
`;

const ProductDetails = ({ selectedProduct }) => {
  const [productData, setProductData] = useState([]);
  const [styleId, setStyleId] = useState('');
  const [styleIndex, setStyleIndex] = useState('');
  const [styleSelected, setStyleSelected] = useState(false);

  useEffect(() => {
    getData(setProductData);
    // setProductData(selectedProduct);
    // console.log(selectedProduct);
  }, []);

  const getStyleId = (id, index) => {
    setStyleId(id);
    setStyleIndex(index);
    setStyleSelected(true);
  };

  return (
    <Body>
      <Content>
        <LeftColumn>
          <ImageGallery productStyle={productData[1]} styleId={styleId} styleIndex={styleIndex} styleSelected={styleSelected} />
        </LeftColumn>
        <RightColumn>
          <ProductInformation product={productData[0]} styles={productData[1]} styleId={styleId} styleIndex={styleIndex} styleSelected={styleSelected} />
          <StyleSelector styles={productData[1]} getStyleId={getStyleId} />
          <AddToCart styles={productData[1]} styleId={styleId} styleIndex={styleIndex} styleSelected={styleSelected} />
        </RightColumn>
      </Content>
      {/* <ProductOverview product={productData[0]} /> */}
    </Body>
  );
};

export default ProductDetails;