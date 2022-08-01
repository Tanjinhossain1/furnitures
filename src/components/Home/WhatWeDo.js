import React from 'react';

const WhatWeDo = () => {
    return (
        <div className='w-3/4 my-32 mx-auto'>
            
         


            <div>
                <p className='font-bold text-yellow-500'>OUR SPECIALIZATION</p>
                <p className='text-4xl font-semibold mt-2'>WHAT WE DO</p>
            </div>
            <div className='grid gap-10 grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-4'>
                <div>
                    <img src="https://i.ibb.co/sHW38YT/intersss.webp" alt="" />
                    <p className='text-2xl font-semibold my-5'>INTERIOR DESIGN</p>
                    <p>As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/3ThQY8D/officede.webp" alt="" />
                    <p className='text-2xl font-semibold my-5'>OFFICE DESIGN</p>
                    <p>Our commitment to exceptional quality has never wavered. To day ranks as one of the most highly-regarded construction.</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/QrhBnzy/interde.webp" alt="" />
                    <p className='text-2xl font-semibold my-5'>HOME DESIGN</p>
                    <p>Interdisciplinary architectural studio with cultural, residential and commercial projects built worldwide.</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/tq32ynW/drowde.webp" alt="" />
                    <p className='text-2xl font-semibold my-5'>DESIGN DRAWING</p>
                    <p>Creating architectural and creative solutions to help people realize their vision and make them a reality.</p>
                </div>
            </div>
            
            
            <hr className='my-12' />
            <div className='grid gap-10 grid-cols-1 mt-8 md:grid-cols-2 lg:grid-cols-4'>
                <div className='flex  items-center'>
                    <p className='text-5xl text-[#dfa667] font-semibold'>85</p>
                    <p className='text-xl font-semibold ml-8' >PROJECTS <br /> COMPLETED</p>
                </div>
                <div className='flex  items-center'>
                    <p className='text-5xl text-[#dfa667] font-semibold'>100</p>
                    <p className='text-xl font-semibold ml-8' >HAPPY <br /> CLIENTS</p>
                </div>
                <div className='flex  items-center'>
                    <p className='text-5xl text-[#dfa667] font-semibold'>30</p>
                    <p className='text-xl font-semibold ml-8' >AWARDS <br /> RECEIVED</p>
                </div>
                <div className='flex  items-center'>
                    <p className='text-5xl text-[#dfa667] font-semibold'>80</p>
                    <p className='text-xl font-semibold ml-8' >CUPS OF <br /> COFFEE</p>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;