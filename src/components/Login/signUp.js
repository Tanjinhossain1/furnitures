import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
       <div className='py-28'>
         <div className='mb-12  w-4/4 sm:w-3/4 md:w-2/4 lg:w-2/4 xl:w-1/4  mx-auto shadow-2xl rounded-2xl bg-[#ecf0f3] '>
            <div className='shadow-inner rounded-2xl'>
                <div className='w-3/4 mx-auto py-12 '>
                    <div>
                        <h1 className='text-2xl text-[#ae3ead] font-bold text-center'>SIGN UP</h1>
                        <form className='mt-8 '>

                            {/* Name  */}
                            <div className='flex flex-col mb-4'>
                                <label className='text-gray-700 mb-1' htmlFor="name">Name</label>
                                <input className='rounded-full p-2 shadow-inner bg-gradient-to-t from-[#f9feff] to-[#e9eef1]'
                                    name='name' type="text" placeholder='your name' />
                            </div>


                            {/* email  */}
                            <div className='flex flex-col mb-4'>
                                <label className='text-gray-700 mb-1' htmlFor="email">Email</label>
                                <input className='rounded-full p-2 shadow-inner bg-gradient-to-t from-[#f9feff] to-[#e9eef1]'
                                    name='email' type="Email" placeholder='email address' />
                            </div>


                            {/* password  */}
                            <div className='flex flex-col mb-4 w-full'>
                                <label className='text-gray-700 mb-1' htmlFor="password">Password</label>
                                <input className='border border-gray-200 rounded-full p-2 shadow-inner bg-gradient-to-t from-[#f9feff] to-[#e9eef1] '
                                    name='password' type="password" placeholder='password' />                            
                            </div>


                            {/* forgat pass  */}
                            <p className='mb-4'><small>Already have an account? <span className='text-[#ae3ead]'><Link to='/login'>Login</Link></span></small></p>

                            {/* login button  */}
                            <input className='w-full border text-gray-900  rounded-full   py-3 font-bold bg-gradient-to-br from-[#4f2deb] via-[#ae3ead] to-[#0dc4d1] ' type="submit" value="SIGN UP" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
       </div>
    );
};

export default SignUp;