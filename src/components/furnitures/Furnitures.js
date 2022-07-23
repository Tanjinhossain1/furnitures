import React, { useEffect, useState } from 'react';
import Furniture from './Furniture';

const Furnitures = () => {
    const [furnitures, setFurnitures] = useState([]);
    useEffect(() => {
        fetch('furnitures.json')
            .then(res => res.json())
            .then(data => setFurnitures(data))
    }, [])
    
    return (
        <div className='lg:w-3/4 my-32 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                furnitures.map((furniture, index) => <Furniture furniture={furniture} key={index} />)
            }
        </div>
    );
};

export default Furnitures;