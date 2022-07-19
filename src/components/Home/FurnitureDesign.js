import React from 'react';

const FurnitureDesign = () => {

    return (
        <div className='mb-12 bg-fixed'>
            <div className='bg-fixed bg-[#090221] py-20'>
                <div className='lg:flex w-3/4 mx-auto text-white justify-evenly items-center '>
                    <div>
                        <h1 className='text-6xl font-semibold'>Smart solution for <br /> modern living</h1>
                        <p className='w-2/4 my-6'>Wheather wrapped, tied-and twisted or draped finished over bare shoulders collection all ages in time.</p>
                        <button className='bg-[#f4948d] text-white px-8 py-1 rounded-full '>Shop Collection</button>
                    </div>
                        <div className=' bg-gray-400 hover:duration-1000 ease-linear hover:bg-gradient-to-tr from-[#9616db] via-[#ed0ca6] to-[#043bd1] rounded-full p-2' >
                    <div className=' bg-[#090221] rounded-full py-32 px-8' >
                            <img className='hover:scale-125 duration-1000 ' width={400} src="https://i.ibb.co/3ybwsyS/red-Sofa-removebg-preview.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FurnitureDesign;