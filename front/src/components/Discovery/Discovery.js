import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './Discovery.scss';
import { FetchPosts } from '../../api';

const Discovery = () => {
  const [productsData, setProductsData] = useState([])

  useEffect(() => {
    FetchPosts()
      .then((res) => {
        const data = res.data
        setProductsData(data);
      })
      .catch((err) => {
        console.log('errrrr', err);
      })
  }, [])



  return (
    <div className="discovery-page">
      {productsData.map((product) => {
        return (
          <ProductCard key={product._id} product={product}  onDelete={(id)=>{ 
            setProductsData(productsData.filter((e)=>e._id !== id))
          }} />
        )
      })}
    </div>
  )
}

export default Discovery;