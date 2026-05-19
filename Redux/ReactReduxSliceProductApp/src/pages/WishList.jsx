import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import ProductCard from '../components/ProductCard'

const WishListData = () => {

  const WishListData = useSelector((state) => state.wishlist.wishlist)  


   console.log("wishlist", WishListData)

  return (
    <>
    <div>WishList</div>
    <ProductCard productData={WishListData}/>
    </>
  )
}

export default WishListData