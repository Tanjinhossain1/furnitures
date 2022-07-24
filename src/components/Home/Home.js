import React from 'react';
import Furnitures from '../furnitures/Furnitures';
import Banner from './Banner';
import FurnitureDesign from './FurnitureDesign';
import MidChair from './BestFurniture';
import Creative from './Creative';

const Home = () => {
    return (
        <div>
            <Banner />
           <FurnitureDesign />
           <MidChair />
           <Furnitures />
           <Creative />
        </div>
    );
};

export default Home;