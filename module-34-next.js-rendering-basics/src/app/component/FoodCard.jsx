import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FoodCard = ({food}) => {
    const {id,dish_name,category,image_link} =food
    return (
        <div className="card bg-base-100  shadow-sm">
  <figure>
    <Image src={image_link} width={500} height={400} alt='image of food menu'>
    </Image>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     { dish_name}
      <div className="badge badge-secondary">Items</div>
    </h2>
    <p>{category}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Add to cart</div>
      <Link href={`/menu/${id}`}>
      <div className="badge badge-outline">Show Details</div>
      </Link>
    </div>
  </div>
</div>
    );
};

export default FoodCard;