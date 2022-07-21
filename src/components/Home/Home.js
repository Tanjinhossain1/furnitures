import React from 'react';
import Furnitures from '../furnitures/Furnitures';
import Banner from './Banner';
import FurnitureDesign from './FurnitureDesign';

const Home = () => {
    return (
        <div>
            <Banner />
           <FurnitureDesign />
           <Furnitures />
        </div>
    );
};

export default Home;