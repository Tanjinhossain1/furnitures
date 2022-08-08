import { faDeleteLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const WIshListProduct = ({product,refetch}) => {
    const { name, image, rating, price } = product;
    const deleteWishListProduct = (id) => {
        fetch(`http://localhost:5000/deleteWishListProduct/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                console.log('delete', data)
            })
    }
    return (
        <div>
            <div>
            <div>
                <div className=''>


                    <div className={`flex duration-1000 shadow-2xl p-5 border-2  border-orange-500 rounded-lg justify-center `}>
                        <div className=' ' >

                            <div className={`shadow-2xl  px-12 mt-4 `} >
                            </div>
                            <img className={` h-[250px]`} src={image} alt="" />

                            <p className={` text-xl mt-2 `} >{name}</p>
                            <p className={` font-bold text-pink-800 `} >{price}$</p>
                           

                            <p>
                                {
                                    rating === '3' && <div>
                                        <FontAwesomeIcon className='text-yellow-500 ' icon={faStar} />
                                        <FontAwesomeIcon className='text-yellow-500 ' icon={faStar} />
                                        <FontAwesomeIcon className='text-yellow-500 ' icon={faStar} />
                                        <FontAwesomeIcon className='text-gray-300' icon={faStar} />
                                        <FontAwesomeIcon className='text-gray-300' icon={faStar} />
                                    </div>
                                }
                                {
                                    rating === '4' && <div>
                                        <FontAwesomeIcon className='text-yellow-500 ' icon={faStar} />
                                        <FontAwesomeIcon className='text-yellow-500 ' icon={faStar} />
                                        <FontAwesomeIcon className='text-yellow-500 ' icon={faStar} />
                                        <FontAwesomeIcon className='text-yellow-500 ' icon={faStar} />
                                        <FontAwesomeIcon className='text-gray-300' icon={faStar} />
                                    </div>
                                }
                                {
                                    rating === '5' && <div>
                                        <FontAwesomeIcon className='text-yellow-500 ' icon={faStar} />
                                        <FontAwesomeIcon className='text-yellow-500 ' icon={faStar} />
                                        <FontAwesomeIcon className='text-yellow-500 ' icon={faStar} />
                                        <FontAwesomeIcon className='text-yellow-500 ' icon={faStar} />
                                        <FontAwesomeIcon className='text-yellow-500 ' icon={faStar} />
                                    </div>
                                }
                                {/* <FontAwesomeIcon className='text-gray-300' icon={faStar} /> */}
                            </p>
                            <button className='text-4xl text-red-600' onClick={() => deleteWishListProduct(product._id)}><FontAwesomeIcon icon={faDeleteLeft} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default WIshListProduct;