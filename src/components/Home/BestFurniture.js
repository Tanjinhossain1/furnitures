import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const BestFurniture = () => {
    return (
        <div className='bg-gradient-to-br from-[#7cabd4] via-[#ebeced] to-[#d4e5f8] ' >
            <div className='w-3/4 mx-auto py-32 flex items-center justify-between '>
                <div>
                    <h1 className='text-6xl  font-semibold' ><span className='text-[#235d90]'>Discover</span> The </h1>
                    <h1 className='text-6xl mt-2 font-semibold' >Best <span className='text-[#235d90]'>Furniture</span></h1>

                    <p className='mt-8'>Find The Lower Price for Design in london <br /> today. Now on sale at super mall</p>
                    <div className='my-6 flex items-center'>
                    <button className='duration-700 border-2 border-transparent rounded-lg bg-[#2571b0] px-6 py-2 text-white hover:text-black hover:bg-transparent hover:border-2 hover:border-[#2571b0] '>Order Now</button>
                    <button className='text-[#2571b0] flex items-center lg:ml-12 font-semibold '> <FontAwesomeIcon className='text-3xl' icon={faCirclePlay} /><p className='ml-5'> How To Order</p></button>
                    </div>
                    <button className='duration-700 rounded-lg text-[#2571b0] border-2 border-[#2571b0] px-4 py-2 hover:bg-[#2571b0] hover:text-white '>Discover The Best</button>
                </div>
                <div>
                    <img className='hidden lg:block mb-[-160px]  ml-[450px] ' src="https://i.ibb.co/x5j10p8/dot-top-removebg-preview.png" alt="" />
                    <img src="https://i.ibb.co/F5cCgfd/goodroom-1.jpg" alt="" />
                     <img className='hidden lg:block ml-[-130px]  mt-[-70px] ' src="https://i.ibb.co/wMp9hKt/dot-removebg-preview.png" alt="" />
                </div>
            </div>
        </div>
    );
};

export default BestFurniture;