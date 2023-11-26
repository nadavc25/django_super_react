import axios from 'axios';
import React, { useState, useEffect } from "react";
import ProdDisplay from './ProdDisplay';

const Product = () => {
    console.log("products");
    const MY_SERVER = "https://dgango-supermarker.onrender.com/products/"
    const [products, setproducts] = useState([])
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios.get(MY_SERVER);
        console.log(result.data);
        setproducts(result.data);
      };
  
  
      fetchData();
    }, [products.length]);
  
  return (
    <div className="row row-cols-1 row-cols-md-4 g-6">
    { products.map((prod,index) => <ProdDisplay key={index} prod= {prod}></ProdDisplay>)}
    </div>
  )
  
}

export default Product