import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard';
const Home = () => {
     const[products,setProducts]=useState([]);
    async function getData() {
       
        try {
           const data = await axios.get("https://fakestoreapi.com/products"); 
           setProducts(data.data);  
           console.log(data);
        } catch (error) {
            console.log(error)
        }
        
    }

    useEffect(()=>{
        getData();
    },[])


  return (
    <div>
        {
            products.map((item)=>{
                return (
                <ProductCard item={item}/>
            )
            })
        }
    </div>
  )
}

export default Home