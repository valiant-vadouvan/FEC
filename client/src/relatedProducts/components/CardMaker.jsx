import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FeaturesButton from './FeaturesButton';
import DeleteButton from './DeleteButton';

const Card = styled.div`
border: solid 1px black;
height: 370px;
width: 250px;
display: inline-block;
margin-right: 15px;
`;
const CardMaker = ({ product, currentProduct, buttonType }) => {
  const placeholderImage = 'https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png';
  const [productData, setProductData] = useState([]);
  const [currentProductFeatures, setCurrentProductFeatures] = useState([]);
  const [relatedProductedFeatures, setRelatedProductedFeatures] = useState([]);

  useEffect(() => {
    const {
      url, category, name, price,
    } = product;
    setProductData([url, category, name, price]);
  }, [product]);
  useEffect(() => {
    const { name, features } = currentProduct;
    setCurrentProductFeatures([name, features]);
  }, [currentProduct]);
  useEffect(() => {
    const { name, features } = product;
    setRelatedProductedFeatures([name, features]);
  }, [product]);

  return (
    <Card>
      {buttonType === 'modal' && (<FeaturesButton currentFeatures={currentProductFeatures} relatedFeatures={relatedProductedFeatures} />)}
      {buttonType === 'delete' && (<DeleteButton />)}
      <div className="center-image">
        <img src={`${productData[0]}`} onError={(e) => { e.target.onerror = null; e.target.src = placeholderImage; }} alt="default" width="210" height="288px" />
      </div>
      <div className="category">
        {`Category: ${productData[1]}`}
      </div>
      <div className="product-name">
        {`Name: ${productData[2]}`}
      </div>
      <div className="price">
        {`Price: $${productData[3]}`}
      </div>
      <div className="stars">
        ★★★★★
      </div>
    </Card>
  );
};
export default CardMaker;
