import React from 'react';
import FoodCard from '../component/FoodCard';

const MenuPage =async () => {
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods')
    const data = await res.json()
    const foods = data.data//in source array of object are inside data parameter
    return (
        <div>
            <h2>food menu</h2>
            <div className='grid grid-cols-3 gap-4'>
                {
                    foods.map(food => <FoodCard  key={food.id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default MenuPage;