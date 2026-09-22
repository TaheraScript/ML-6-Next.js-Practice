import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <section className=' py-20 '>
            <div className='grid grid-cols-2 gap-4 items-centre container mx-auto px-14 py-25 bg-[#f3f3f3] rounded-2xl'>
            <div >
            <h2 className='text-3xl font-semibold pb-4'>Books to freshen up <br />your bookshelf</h2>
            <button className="btn btn-active btn-success text-[10px]">View The List</button>
            </div>
            <div>
                <Image src='/images/hero_img.jpg' width={200} height={250} alt='image of a book'></Image>
            </div>
        </div>
        </section>
    );
};

export default Banner;