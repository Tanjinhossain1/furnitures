import React from 'react';
import Furnitures from '../furnitures/Furnitures';
import Banner from './Banner';
import FurnitureDesign from './FurnitureDesign';
import MidChair from './BestFurniture';

const Home = () => {
    return (
        <div>
            <Banner />
           <FurnitureDesign />
           <Furnitures />
           <MidChair />
        </div>
    );
};

export default Home;