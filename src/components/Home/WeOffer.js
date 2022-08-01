import React from 'react';

const WeOffer = () => {
    return (
        <div className='my-32'>
            <div>
                <div className='mb-12 text-center'>
                    <p className='text-5xl font-bold mb-5'>WHAT WE OFFER TO OUR CLIENTS</p>
                    <p>If you are looking at blank cassettes on the web, you may be very confused at the difference in <br /> price. You may see some for as low as $.17 each.</p>
                </div>

                <div className='w-3/4 gap-10 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                    <div className='border w-[350px] hover:shadow-2xl hover:border-white  duration-700 border-gray-200 rounded-lg p-5'>
                        <img src="https://preview.colorlib.com/theme/maxitechture/img/icon/f-icon-1.png.webp" alt="" />
                        <p className='text-xl font-bold my-4'>Architecture</p>
                        <p className='text-gray-400'>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.</p>

                        <button className='bg-[#a7cb00] py-2 px-6 rounded-lg shadow-2xl mt-6'>View Detail</button>
                    </div>
                    <div className='border w-[350px] hover:shadow-2xl hover:border-white duration-700 border-gray-200 rounded-lg p-5'>
                        <img src="https://preview.colorlib.com/theme/maxitechture/img/icon/f-icon-2.png.webp" alt="" />
                        <p className='text-xl font-bold my-4'>Furniture Design</p>
                        <p className='text-gray-400'>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.</p>

                        <button className='bg-[#a7cb00] py-2 px-6 rounded-lg shadow-2xl mt-6'>View Detail</button>
                    </div>
                    <div className='border w-[350px] hover:shadow-2xl hover:border-white  duration-700 border-gray-200 rounded-lg p-5'>
                        <img src="https://preview.colorlib.com/theme/maxitechture/img/icon/f-icon-3.png.webp" alt="" />
                        <p className='text-xl font-bold my-4'>Concept Design</p>
                        <p className='text-gray-400'>If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $17 each.</p>

                        <button className='bg-[#a7cb00] py-2 px-6 rounded-lg shadow-2xl mt-6'>View Detail</button>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default WeOffer;