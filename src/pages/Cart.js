import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useCart from '../components/hooks/useCart';
import CartProduct from '../PageComponent/CartProduct';

const Cart = () => {
    const { isLoading, data: products, refetch } = useQuery(['allCartProduct'], () =>
    fetch('http://localhost:5000/allCartProduct').then(res =>
        res.json()
    )
)
if (isLoading) {
    return <button className='btn btn-circle'>Loading</button>
}
    return (
        <div className='py-28'>
            <p className='text-4xl'>{products?.length}</p>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-3/4 mx-auto'>
                {
                    products.map((product) =>  <CartProduct refetch={refetch} key={product._id} product={product} />)

                }
                </div>
            </div>
        </div>
    );
};

export default Cart;