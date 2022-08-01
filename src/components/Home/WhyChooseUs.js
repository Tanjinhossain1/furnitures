import React from 'react';

const WhyChooseUs = () => {
    return (
        <div className='my-32'>
            <div style={{
                backgroundImage:`url(https://i.ibb.co/JsMmX0C/1.jpg)`
            }} className='bg-no-repeat  bg-fixed  before:bg-black  bg-[#cccccc] py-32 text-white '>
                <div className='w-2/3  mx-auto text-center'>
                    <p className='font-bold text-yellow-500'>WHY CHOOSE US?</p>
                    <p className='text-5xl my-8 font-semibold'>OUR ABILITY TO DELIVER OUTSTANDING <br /> RESULTS FOR OUR CLIENTS STARTS WITH <br /> OUR TEAM OF SMART.</p>
                    <button className='bg-yellow-600 py-2 px-8 rounded-lg text-white font-bold'>Contact Us</button>
                </div>
                
            </div>
        </div>
    );
};

export default WhyChooseUs;