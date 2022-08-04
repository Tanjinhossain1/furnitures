import React, { useState } from 'react';

const ModernCollection = () => {
    const [buttonHover, setButtonHover] = useState(false);
    console.log(buttonHover)
    return (
        <div className='bg-[#fffefd] my-32'>
            <div>
                <div>
                    <div className='text-center'>
                        <p className='font-bold text-5xl'>IRRESISTABLY</p>
                        <p className='font-bold text-5xl'> ELEGANT AND</p>
                        <p className='font-bold text-5xl'> MODERN</p>
                        <p className=' text-8xl font-mono text-[#d7cbb7]'>Collection</p>
                    </div>
                    <div className='lg:w-3/4 mx-auto gap-5 mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                        <div>
                            <img src="https://tobel.qodeinteractive.com/wp-content/uploads/2021/05/Blog-list-img-1.jpg" alt="" />

                            <p>May 24, 2021-By Jessy J. - Decor</p>
                            <h1 className='text-3xl  my-5'>GET COZY WITH A TOUCH OF ELEGANCE</h1>
                            <button >READ M O R E</button>
                        </div>
                        <div>
                            <img src="https://tobel.qodeinteractive.com/wp-content/uploads/2021/05/Blog-list-img-2.jpg" alt="" />

                            <p>a May 24, 2021-By Jessy J. - Decor</p>
                            <h1 className='text-3xl  my-5 '>TOP FURNITURE CATLOGUE DESIGN</h1>
                            <button >READ M O R E</button>
                        </div>
                        <div>
                            <img src="https://tobel.qodeinteractive.com/wp-content/uploads/2021/05/Blog-list-img-3.jpg" alt="" />

                            <p>a May 24, 2021-By Jessy J. - Decor</p>
                            <h1 className='text-3xl  my-5 '>STYLISH BEDROOM DESIGN DETAILS</h1>
                            <button >READ M O R E</button>
                        </div>
                        <div>
                            <img src="https://tobel.qodeinteractive.com/wp-content/uploads/2021/05/Blog-list-img-4.jpg" alt="" />

                            <p>a May 24, 2021-By Jessy J. - Decor</p>
                            <h1 className='text-3xl  my-5 '>READ ABOUT NEW DESIGN FEATURES</h1>
                            <button >READ M O R E</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModernCollection;