import { useQuery } from '@tanstack/react-query';

const useCart = () => {
    const { isLoading, data: products, refetch } = useQuery(['allCartProduct'], () =>
        fetch('http://localhost:5000/allCartProduct').then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <button className='btn btn-circle'>Loading</button>
    }
    return { products, refetch, isLoading}
};

export default useCart;