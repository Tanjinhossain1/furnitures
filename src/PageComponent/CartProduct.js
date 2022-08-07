import { faDeleteLeft, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const CartProduct = ({ product, refetch }) => {
    const [quantityInput, setQuantityInput] = useState(false)

    const { name, image, rating, price, _id, quantity } = product;

    // delete cart product 
    const deleteCartProduct = (id) => {
        fetch(`http://localhost:5000/deleteCartProduct/${id}`, {
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
                <div className=''>
                    <div className={`flex duration-1000 shadow-2xl p-5 border-2  border-orange-500 rounded-lg justify-center `}>
                        <div className=' ' >

                            <div className={`shadow-2xl  px-12 mt-4 `} >
                            </div>
                            <img className={` h-[250px]`} src={image} alt="" />

                            <p className={` text-xl mt-2 `} >{name}</p>
                            <p className={` font-bold text-pink-800 `} >{price}$</p>
                            {
                                quantityInput ? <div>
                                    <form className='flex items-center'>
                                        <input name='quantity' type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
                                        <input type='submit' value='Add' className='btn btn-primary ' />
                                    </form>
                                    <button className='' onClick={() => setQuantityInput(false)}>Back</button>
                                </div>


                                    :

                                    <div className='flex items-center justify-between'>
                                        <p className='text-xl mb-2'>Quantity: {quantity}</p>
                                        <button onClick={() => setQuantityInput(true)} className='text-green-600 font-semibold'>Add Quantity</button>
                                    </div>
                            }

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
                            <button className='text-4xl text-red-600' onClick={() => deleteCartProduct(_id)}><FontAwesomeIcon icon={faDeleteLeft} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;