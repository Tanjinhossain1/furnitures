import React, { useState } from 'react';
import { faStar, faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';

const Furniture = ({ furniture, refetch }) => {
    const [hoverDone, setHoverDone] = useState(false);
    const { name, image, rating, price } = furniture;
    const addToCart = (product) => {
        const quantity = 1
        const { name, image, rating, price, category, _id } = product;
        const productDetail = { name, image, rating, category, quantity, price }
        fetch(`https://furniture-ms4p.onrender.com/addToCart/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productDetail)
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                if (data.upsertedId === null) {
                    toast.error('Already You Added the Cart ', {
                        position: "bottom-center",
                        theme: "colored"
                    })
                }
                console.log(data)
            })

    }
    const wishList = (product) => {
        const { name, image, rating, price, category, _id } = product;
        const productDetail = { name, image, rating, category, price }
        fetch(`https://furniture-ms4p.onrender.com/addToWishList/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productDetail)
        })
            .then(res => res.json())
            .then(data => {
                refetch();
                if (data.upsertedId === null) {
                    toast.error('Already You Added the WishList ', {
                        position: "bottom-center",
                        theme: "dark"
                    })
                }
                console.log(data)
            })
    }
    return (
        <div className=''>
            <div className={`flex duration-1000 shadow-2xl p-5 border-2  border-orange-500 rounded-lg justify-center ${hoverDone && 'bg-[#a00be6] border-[#a00be6]'} border-2 `}>
                <div className=' ' onMouseEnter={e => {

                    setHoverDone(true)
                }}
                    onMouseLeave={e => {
                        setHoverDone(false)
                    }}>

                    <div className={`shadow-2xl  px-12 mt-4 `} >
                    </div>
                    <img className={` h-[300px] ${hoverDone && 'opacity-80'}`} src={image} alt="" />

                    <div className=''>

                        {
                            hoverDone && <div className=' ml-[100px] flex gap-10 mt-4 '>
                                <p onClick={() => addToCart(furniture)} >

                                    <FontAwesomeIcon title='Add To Cart' className='text-3xl duration-500 text-white hover:text-green-500 cursor-pointer ' icon={faCartPlus} /> </p>
                                <p onClick={() => wishList(furniture)} >

                                    <FontAwesomeIcon title='Wish List' className='text-3xl text-white duration-500 hover:text-red-500 cursor-pointer ' icon={faHeart} /> </p>
                            </div>
                        }

                    </div>


                    <p className={` text-xl mt-2 ${hoverDone && ' opacity-0 '}`} >{name}</p>
                    <p className={` font-bold text-pink-800 ${hoverDone && 'opacity-0 hidden'}`} >{price}$</p>
                    <p>
                        {
                            rating === '3' && <div className={` ${hoverDone && 'opacity-0 hidden'}`} >
                                <FontAwesomeIcon className='text-yellow-500 ' icon={faStar} />
                                <FontAwesomeIcon className='text-yellow-500 ' icon={faStar} />
                                <FontAwesomeIcon className='text-yellow-500 ' icon={faStar} />
                                <FontAwesomeIcon className='text-gray-300' icon={faStar} />
                                <FontAwesomeIcon className='text-gray-300' icon={faStar} />
                            </div>
                        }
                        {
                            rating === '4' && <div className={` ${hoverDone && 'opacity-0 hidden'}`} >
                                <FontAwesomeIcon className='text-yellow-500 ' icon={faStar} />
                                <FontAwesomeIcon className='text-yellow-500 ' icon={faStar} />
                                <FontAwesomeIcon className='text-yellow-500 ' icon={faStar} />
                                <FontAwesomeIcon className='text-yellow-500 ' icon={faStar} />
                                <FontAwesomeIcon className='text-gray-300' icon={faStar} />
                            </div>
                        }
                        {
                            rating === '5' && <div className={` ${hoverDone && 'opacity-0 hidden'}`} >
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