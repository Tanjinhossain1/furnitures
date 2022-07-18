import React, { useState } from 'react';

const ExtraCard = () => {
    const [card1,setCard1]=useState(true);
    const [card2,setCard2]=useState(false);
    const [card3,setCard3]=useState(false);
    return (
        <div className='grid mb-12 gap-4 lg:grid-cols-3 w-3/4 mx-auto'>
            <div 
            onMouseEnter={()=>{
                console.log('enter 1')
                setCard3(false)
                setCard2(false)
                setCard1(true)
            }} 
            onMouseLeave={()=>{
                console.log('exit 1')
                setCard3(false)
                setCard2(false)
                setCard1(true)
            }}
             className={` min-w-min shadow-2xl border-2 border-red-600 duration-700  hover:rounded-2xl rounded-2xl ${card1&&'bg-red-500 text-white'}`}>
                <div className="card-body rounded-2xl hover:rounded-2xl duration-1000 ease-in">
                    <div className='flex justify-center'>
                        <img width={100} src="https://i.ibb.co/58K5j3L/phone-2-removebg-preview.png" alt="" />
                    </div>
                    <p className='text-xl font-bold text-center  mt-[-30px]'>01861557343</p>
                    <p className='text-center font-semibold'>Contact with us </p>
                    <p className='text-center'> </p>
                </div>
            </div>
            <div
             onMouseEnter={()=>{
                console.log('enter 2')
                setCard3(false)
                setCard1(false)
                setCard2(true)
            }} 
            onMouseLeave={()=>{
                console.log('exit 2')
                setCard3(false)
                setCard1(false)
                setCard2(true)
            }}
             className={` min-w-min shadow-2xl border-2 border-pink-600  hover:rounded-2xl duration-700 rounded-2xl ${card2&&'bg-pink-500  text-white'}`}>
                <div className="card-body rounded-2xl hover:rounded-2xl duration-1000 ease-in">
                    <div className='flex justify-center'>
                        <img width={100} src="https://i.ibb.co/smjp03S/map-marker-removebg-preview.png" alt="" />
                    </div>
                    <p className='text-xl font-bold text-center  mt-[-30px]'>Location</p>
                    <p className='text-center font-semibold'>Everywhere You get Your furniture </p>
                </div>
            </div>
            <div
             onMouseEnter={()=>{
                console.log('enter 1')
                setCard2(false)
                setCard1(false)
                setCard3(true)
            }} 
            onMouseLeave={()=>{
                console.log('exit 1')
                setCard3(true)
                setCard2(false)
                setCard1(false)
            }}
             className={`shadow-2xl min-w-min border-2 border-blue-600 duration-700  hover:rounded-2xl rounded-2xl ${card3&&'bg-blue-500 text-white'}`}>
                <div className="card-body rounded-2xl hover:rounded-2xl duration-1000 ease-in">
                    <div className='flex justify-center'>
                        <img width={100} src="https://i.ibb.co/HnGYb4Z/calendar-removebg-preview.png" alt="" />
                    </div>
                    <p className='text-xl font-bold text-center  mt-[-30px]'>Active Time</p>
                    <p className='text-center font-semibold'>every Day 9AM - 8PM</p>
                </div>
            </div>
        </div>
    );
};

export default ExtraCard;