'use client'
import React, { useState } from 'react';

const Counter = () => {
    const[count,setCount] = useState(0)
    const handleButton =() =>{
        setCount(count + 1)
        console.log('client component')
    }
   
    return (
        <div>
            <h2 className='text-3xl text-amber-500'>Counter : {count}</h2>
       <button onClick ={handleButton}className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer'>Increase</button>
        </div>
    );
};

export default Counter;