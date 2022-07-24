import React, { useState } from 'react';

const Furniture = ({ furniture }) => {
    const [hoverDone, setHoverDone] = useState(false);
    const { name, image, description, price } = furniture;
console.log(name)
    return (
        <div className=''>
            <div className='flex justify-center '>
                <div className=' ' onMouseEnter={e => {
                    console.log('ok hover');
                    setHoverDone(true)
                }}
                    onMouseLeave={e => {
                        setHoverDone(false)
                    }}>
                    <div className={`bg-white lg:w-[330px] xl:w-[400px] 2xl:w-[540px] duration-1000 rounded-lg  px-12 mt-4 ml-[6px] mb-[-400px] absolute ${hoverDone && 'translate-y-40 bg-black text-white number1 scale-150 '}`} >
                        <h1 className={`text-xl w-full duration-1000 ${hoverDone && 'text-red-600'}`}>{name}</h1>
                        <p>Price: <span className='font-bold text-pink-600 '> {price}$</span></p>
                        <h1 className={`  duration-1000  ${hoverDone ? 'block duration-1000  mt-4' : 'hidden'}`}>{description}</h1>
                        <button className={` text-red-600 font-semibold duration-1000  ${hoverDone ? 'block duration-1000  mt-3' : 'hidden'}`}>Buy It</button>
                    </div>
                    <img className=' ' src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Furniture;