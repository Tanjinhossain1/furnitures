import React from 'react';
import ExtraCard from './ExtraCard';
import ParticleBackground from './ParticleBackground';

const Banner = () => {
    return (
        <div className='bg-[#2a303c] pb-12' >
            {/* <ParticleBackground /> */}
        <div className='min-h-screen '>
        {/* <ParticleBackground /> */}
        <div className='lg:flex  justify-between items-center lg:ml-32 mx-auto  '>

       
          <div  className='w-2/4 '>
                <div className=''>
                    <img width={100} alt='furnitureLogo' src="https://i.ibb.co/qRH1JGj/furniture-Logo.png" />
                </div>
                <div>
                    <p className='text-6xl text-[#9e9e9e] mt-12'>EXCLUSIVE</p>
                    <p className='text-6xl text-[#60768e] font-bold mb-12'>FURNITURE</p>
                    <p className='text-white w-full lg:w-3/4'>Hello Here you can see best furniture what you want. Also we give you the discount for this month and our all furniture is best quality in this world. All furniture make by best wood and best technologies. </p>
                    <button className='bg-[#5c7897] rounded-full text-white mt-4 py-2 px-8 font-semibold text-xl'>Shop Now</button>
                </div>
            </div>
       
            <div className='number1 hidden lg:block mr-[-150px]'>
                <div className='bg-gradient-to-r from-[#9f9fe3] to-[#fafbfc]  p-2 rounded-[50%]'>
                    <div className='bg-gradient-to-r from-[#bad5da] to-[#de95c4]  p-2 rounded-[50%] '>
                        <div className=' bg-[#5c7697] px-8 py-16 rounded-[50%]'>
                            <h1 className='text-5xl text-center font-bold text-white'>65%</h1>
                            <h1 className='text-4xl text-center font-bold text-white'>Discount</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#475f7d]  rounded-l-[420px] pl-12  '>
                <div className='bg-[#c8d3db] rounded-l-[450px] pl-20 py-12'>
                    <img className='my-32 ' width={700} src="https://i.ibb.co/7kW8Jpc/furni-removebg-preview.png" alt="" />
                </div>
            </div>
        </div>
    </div>
    <ExtraCard />
    </div>
    );
};

export default Banner;