import React, { useState } from 'react';
import { faStar,faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Furniture = ({ furniture }) => {
    const [hoverDone, setHoverDone] = useState(false);
    const { name, image, rating, price } = furniture;
    const addToCart = (id)=>{
        console.log(id)
    }
    const wishList = (id)=>{
        console.log(id)
    }
    return (
        <div className=''>
            <div className={`flex duration-1000 shadow-2xl p-5 border-2  border-orange-500 rounded-lg justify-center ${hoverDone&&'bg-[#a00be6] border-[#a00be6]'} border-2 `}>
                <div className=' ' onMouseEnter={e => {
                    
                    setHoverDone(true)
                }}
                    onMouseLeave={e => {
                        setHoverDone(false)
                    }}>
                       
                    <div className={`shadow-2xl  px-12 mt-4 `} >
                        {/* <h1 className={`text-xl w-full  ${hoverDone && 'text-red-600'}`}>{name}</h1>
                        <p>Price: <span className='font-bold text-pink-600 '> {price}$</span></p>
                        <h1 className={`    ${hoverDone ? 'block   mt-4' : 'hidden'}`}>{description}</h1>
                        <button className={` text-red-600 font-semibold   ${hoverDone ? 'block   mt-3' : 'hidden'}`}>Buy It</button> */}
                    </div>
                    <img className={` h-[300px] ${hoverDone&& 'opacity-80'}`} src={image} alt="" />

                   <div className=''>
                 
                      {
                        hoverDone&&<div className=' ml-[100px] flex gap-10 mt-4 '>
                        <p onClick={()=>addToCart(furniture)} > 

                        <FontAwesomeIcon className='text-3xl duration-500 text-white hover:text-green-500 cursor-pointer ' icon={faCartPlus} /> </p>
                        <p onClick={()=>wishList(furniture)} > 

                        <FontAwesomeIcon className='text-3xl text-white duration-500 hover:text-red-500 cursor-pointer '  icon={faHeart} /> </p>
                    </div>
                      }
                    
                   </div>


                    <p className={` text-xl mt-2 ${hoverDone&& ' opacity-0 '}`} >{name}</p>
                    <p className={` font-bold text-pink-800 ${hoverDone&& 'opacity-0 hidden'}`} >{price}$</p>
                    <p>
                        {
                                rating==='3' && <div className={` ${hoverDone&& 'opacity-0 hidden'}`} > 
                                <FontAwesomeIcon className='text-yellow-500 ' icon={faStar} />
                                <FontAwesomeIcon className='text-yellow-500 ' icon={faStar} />
                                <FontAwesomeIcon className='text-yellow-500 ' icon={faStar} />
                                <FontAwesomeIcon className='text-gray-300' icon={faStar} />
                                <FontAwesomeIcon className='text-gray-300' icon={faStar} />
                            </div>
                        }
                        {
                                rating==='4' && <div  className={` ${hoverDone&& 'opacity-0 hidden'}`} > 
                                <FontAwesomeIcon className='text-yellow-500 ' icon={faStar} />
                                <FontAwesomeIcon className='text-yellow-500 ' icon={faStar} />
                                <FontAwesomeIcon className='text-yellow-500 ' icon={faStar} />
                                <FontAwesomeIcon className='text-yellow-500 ' icon={faStar} />
                                <FontAwesomeIcon className='text-gray-300' icon={faStar} />
                            </div>
                        }
                        {
                                rating==='5' && <div  className={` ${hoverDone&& 'opacity-0 hidden'}`} > 
                                <FontAwesomeIcon className='text-yellow-500 ' icon={faStar} />
                                <FontAwesomeIcon className='text-yellow-500 ' icon={faStar} />
                                <FontAwesomeIcon className='text-yellow-500 ' icon={faStar} />
                                <FontAwesomeIcon className='text-yellow-500 ' icon={faStar} />
                                <FontAwesomeIcon className='text-yellow-500 ' icon={faStar} />
                            </div>
                        }
                         {/* <FontAwesomeIcon className='text-gray-300' icon={faStar} /> */}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Furniture;