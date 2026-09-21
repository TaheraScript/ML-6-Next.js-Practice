import React, { Suspense } from 'react';
import SearchFood from '../component/SearchFood';

const foodPromise = async()=>{
    const res = await fetch('https://phi-lab-server.vercel.app/api/v1/lab/foods/top-foods')
    const data = await res.json()
    const foods = data.data
    return foods;
}


const Foodpage = () => {

    return (
        <div>
            <Suspense fallback={<div>Loading.....</div>}>
            <SearchFood foodPromise={foodPromise()}></SearchFood>
            </Suspense>
        </div>
    );
};

export default Foodpage;