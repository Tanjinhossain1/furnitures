import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useCart from '../components/hooks/useCart';
import CartProduct from '../PageComponent/CartProduct';

const Cart = () => {
    const { isLoading, data: products, refetch } = useQuery(['allCartProduct'], () =>
        fetch('https://furniture-ms4p.onrender.com/allCartProduct').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <button className='btn btn-circle'>Loading</button>
    }
    let prices = products.map(p => p.price);
    let sum = 0;

    for (let i = 0; i < prices.length; i++) {
        sum += prices[i];
    }
    console.log(sum)
    return (
        <div className='py-28'>

            <div className='text-center mb-12'>
                <p className='text-4xl'>Total Product: {products?.length}</p>
                <p className='text-4xl'>Total Price: <span className='font-bold text-pink-700'>{sum}$</span> </p>
                <button className='bg-green-600 py-2 px-8 text-white font-semibold rounded-lg mt-2'>Payment</button>
            </div>


            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-3/4 mx-auto'>
                    {
                        products.map((product) => <CartProduct refetch={refetch} key={product._id} product={product} />)

                    }
                </div>
            </div>
        </div>
    );
};

export default Cart;