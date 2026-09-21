import React from "react";

export const generateStaticParams = async () => {
  const res = await fetch("http://localhost:5000/products");
  const products = await res.json();
  return products.map(product => ({ productsId: product.id }));
};

const productsDetailPage = async ({ params }) => {
  const { productsId } = await params;

  const res = await fetch(`http://localhost:5000/products/${productsId}`);
  const product = await res.json();
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.category}</p>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default productsDetailPage;
