import React from 'react';

const Buyer = () => {
    return (
        <div className='w-3/4 mx-auto'>
            <div className='mt-32  lg:flex justify-around items-center'>
                <div>
                    <img className='lg:w-[800px]' src="https://i.ibb.co/gVSkrh3/cartfur.png" alt="" />
                </div>
                <div

                    className='pb-32 h-4/4  bg-white'>
                    <p className='text-xl font-bold'> BUYER</p>
                    <p className='text-3xl mt-6 font-semibold'> Empower your factory
                    </p>
                    <p className='text-3xl mb-6 font-semibold'>With a new lead Channel</p>

                    <p className='w-2/4 '>Never worry about sales <span className=' font-bold'>or income from</span> outboundchannels. <span className=' font-bold'> with chamb your store is </span>directly connected to thousands of interested in your products.</p>

                </div>
            </div>
        </div >
    );
};

export default Buyer;