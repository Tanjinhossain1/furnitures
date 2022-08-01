import React from 'react';

const HomeBlog = () => {
    return (
        <div className=''>
            <div className='w-3/4 mx-auto my-32'>
                <div className='sm:flex justify-between items-center'>
                    <div className='mb-6'>
                        <p className='font-bold text-yellow-600'>LATEST NEWS</p>
                        <p className='text-3xl mt-2 font-semibold'>FROM OUR BLOG</p>
                    </div>
                    <button className='btns btn-2'>View All</button>
                </div>
                <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <div className='shadow-xl h-[420px]  w-[320px] sm:w-[370px] '>
                        <img src="https://preview.colorlib.com/theme/staging/img/blog/xlatest-1.jpg.pagespeed.ic.daE0bmihAK.webp" alt="" />
                        <div className='p-5  '>
                            <p className='text-gray-400 font-bold mb-2'>ARCHITECTURE</p>
                            <p className='text-xl font-semibold'>Target and Amazon Shopping List for  Home Stagers</p>
                            <button className='font-semibold mt-4'>Read More</button>
                        </div>
                    </div>
                    <div className='shadow-2xl w-[320px] sm:w-[370px] '>
                        <img src="https://preview.colorlib.com/theme/staging/img/blog/xlatest-2.jpg.pagespeed.ic.PM6uujTuWq.webp" alt="" />
                        <div className='p-5'>
                            <p className='text-gray-400 font-bold mb-3'>INTERIOR</p>
                            <p className='text-xl font-semibold'>6 Ideas for Team Building and Employee Appreciation for Home Stagers</p>
                            <button className='font-semibold mt-4'>Read More</button>
                        </div>
                    </div>
                    <div className='shadow-2xl h-[440px]  w-[320px] sm:w-[370px] '>
                        <img src="https://preview.colorlib.com/theme/staging/img/blog/xlatest-3.jpg.pagespeed.ic.ewGY-XErXF.webp" alt="" />
                        <div className='p-5'>
                            <p className='text-gray-400 font-bold'>PLANNING</p>
                            <p className='text-xl font-semibold'>How to Find the Best Price Structure for Your Home Staging Services
</p>
                            <button className='font-semibold mt-4'>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBlog;