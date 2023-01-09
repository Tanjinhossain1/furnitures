import { faDeleteLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const CartProduct = ({ product, refetch }) => {
    const [quantityInput, setQuantityInput] = useState(false);
    const [newQuantity, setNewQuantity] = useState(null);

    const { name, image, rating, price, quantity } = product;

    const addQuantity = (newCart) => {
        const { price, _id, quantity } = newCart;
        let newPrice = +newQuantity * price;
        if (+newQuantity < quantity) {
            newPrice = price / +newQuantity;
        }
        fetch(`https://furniture-ms4p.onrender.com/updateCartProduct/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ newQuantity, newPrice })
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                console.log(data)
            })

    }

    // delete cart product 
    const deleteCartProduct = (id) => {
        fetch(`https://furniture-ms4p.onrender.com/deleteCartProduct/${id}`, {
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
                                    <div className='flex items-center'>
                                        <input onBlur={(e) => setNewQuantity(e.target.value)} name='quantity' type="text" placeholder="Type here" class="input input-bordered input-primary w-full max-w-xs" />
                                        <button onClick={() => addQuantity(product)} className='btn btn-primary ' >Add</button>
                                    </div>
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
                            <button className='text-4xl text-red-600' onClick={() => deleteCartProduct(product._id)}><FontAwesomeIcon icon={faDeleteLeft} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;