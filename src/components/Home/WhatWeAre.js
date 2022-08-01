import React from 'react';

const WhatWeAre = () => {
    return (
        <div>
            <div className='lg:w-3/4 mx-auto lg:flex justify-around items-center mt-32'>
                <div className='w-2/4 mx-auto'>
                    <p className='font-bold text-yellow-500'>WHO ARE WE</p>
                    <div>
                        <p className='text-4xl font-thin mt-2 mb-8  '><span className='font-semibold'>WE PROPOSE AND <br /> DISCUSS DESIGN RULES</span></p>
                        <p className=' w-3/4 '>Metasurfaces are generally designed by placing scatterers in periodic or pseudo-periodic grids. We propose and discuss design rules for functional metasurfaces with randomly placed.</p>
                        <p className='mt-5 w-3/4 '>Anisotropic elements that randomly sample. Quisque sit amet nisl ante. Fusce lacinia non tellus id gravida. Cras neque dolor, volutpat et hendrerit et.</p>
                 
                       <div className='mt-5'>
                       <a href="https://twitter.com/Dave_Conner" class="btns  btn-1">
                            <svg>
                                <rect x="0" y="0" fill="none" width="100%" height="100%" />
                            </svg>
                           <span className='ml-4'>Learn More</span>
                        </a>
                       </div>
                       
                    </div>
                </div>

                <div>
                    <img width={500} height={500} src="https://preview.colorlib.com/theme/staging/img/xabout-pic.jpg.pagespeed.ic.mp9lwP9IA9.webp" alt="" />
                </div>
            </div>
        </div>
    );
};

export default WhatWeAre;