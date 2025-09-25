import React from 'react'

const ProductCard = (props) => {
  return (
    <div>
        <h3>{props.item.title}</h3>
        <img src={props.item.image} alt="" />
        <p>₹ {props.item.price}</p>
    </div>
  )
}

export default ProductCard