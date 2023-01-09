import React from 'react';
import { useQuery } from '@tanstack/react-query';
import WIshListProduct from '../PageComponent/WIshListProduct';

const WishList = () => {
    const { isLoading, data: products, refetch } = useQuery(['wishList'], () =>
        fetch('https://furniture-ms4p.onrender.com/wishList').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <button className='btn btn-circle'>Loading</button>
    }
    return (
        <div className='py-28'>

            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-3/4 mx-auto'>
                    {
                        products.map((product) => <WIshListProduct refetch={refetch} key={product._id} product={product} />)

                    }
                </div>
            </div>
        </div>
    );
};

export default WishList;