import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import ProductCard from '../components/ProductCard'

const Cart = () => {

  const cartData = useSelector((state) => state.cart.cartItem)  

  console.log("cartData" , cartData)

  return (
    <>
    <div>Cart</div>
    <ProductCard productData={cartData}/>
    </>
  )
}

export default Cart