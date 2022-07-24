import React from 'react';

const Creative = () => {
    return (
        <div className='mt-12'>
            <div className='lg:w-3/4 mx-auto lg:flex justify-between ' >

                <div>

                    <img className='' src="https://i.pinimg.com/550x/95/a5/7e/95a57e46c4c54e2ded0e723d331e0c91.jpg" alt="" />
                </div>

                <div className='lg:w-2/4 ml-12'>
                    <p className='text-yellow-400 font-bold'>ABOUT US</p>
                    <h1 className='text-4xl font-semibold'>Make Your House To Be <br /> More Creative & Unique</h1>
                    <p className='mt-4 '>Pick out furniture that can take a beating. That you can dance on. Put coffee cups on without a coaster. That a few splashes of errant paint or modge-podge won’t ruin (but rather enrich). Don’t fill your home with a set of museum-quality furnishings you’ve got to keep under plastic — choose furniture pieces made of materials that get better with age and don’t mind a little wear and tear. This will create a home that encourages experimentation and doesn’t punish accident, creating a cauldron of feel-good vibes that might boost creative thinking.</p>
                    <button className='bg-yellow-500 rounded-sm my-8 px-8 py-2 font-semibold  animate-pulse'>
                        Learn More
                    </button>
                    <img src="https://latestkitchenremodel.com/wp-content/uploads/2021/12/2-3.jpg" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Creative;