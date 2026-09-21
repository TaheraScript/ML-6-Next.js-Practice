import React from "react";
import ProductsCard from "../components/ProductsCard";

const getProductsData = async () => {
  const res = await fetch("http://localhost:5000/products");
  return res.json();
};

const productsPage = async () => {
  const products = await getProductsData();
  return (
    <div>
      <h2>Total Products : {products.length}</h2>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductsCard key={product.id} product={product}></ProductsCard>
        ))}
      </div>
    </div>
  );
};

export default productsPage;
