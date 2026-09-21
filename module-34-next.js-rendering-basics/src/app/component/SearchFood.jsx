'use client'
import React, { use} from 'react';

const SearchFood = ({foodPromise}) => {
     const foods = use(foodPromise)
    return (
        <div>
            <div>Top Foods : {foods.length}</div>
            <div>
                {
                    foods.map(food => <div  key={food.id}> {food.category} {food.dish_name}</div>)
                }
            </div>
        </div>
    );
};

export default SearchFood;