import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../components/ProductCard";
import { fetchProduct } from "../features/products/productSlice";
import { useEffect } from "react";
import Footer from "../components/Footer";

const Product = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  return (
    <>
      <div className="mt-16">
        <div>Product</div>
        <div className="grid grid-cols-6">
          <div className="col-span-1">

          </div>
          <div className="col-span-5">
            <ProductCard productData={productData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
