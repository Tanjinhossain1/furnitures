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
        <div style={{backgroundImage:`url(https://i.ibb.co/cJsKnvj/design.jpg)`}} className='bg-fixed '>
            <div className='2xl:w-[1700px] py-32 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    furnitures.map((furniture, index) => <Furniture furniture={furniture} key={index} />)
                }
            </div>
        </div>
    );
};

export default Furnitures;