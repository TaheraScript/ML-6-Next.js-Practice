'use client'
import Link from 'next/link';
import React from 'react';
import useUser from '../hooks/useUser';

const ProductsCard = ({product}) => {
    const{id,name,description} = product
    const user = useUser()
    return (
        <div className="card bg-base-100 image-full  shadow-sm">
  
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
     <Link href={`/products/${id}`}>
      <button className="btn btn-primary">Show Details</button>
     </Link>
    </div>
  </div>
</div>
    );
};

export default ProductsCard;