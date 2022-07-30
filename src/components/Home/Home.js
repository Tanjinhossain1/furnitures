import React from 'react';
import Furnitures from '../furnitures/Furnitures';
import Banner from './Banner';
import FurnitureDesign from './FurnitureDesign';
import MidChair from './BestFurniture';
import Creative from './Creative';
import ModernCollection from './ModernCollection';

const Home = () => {
    return (
        <div>
           <MidChair />
           {/* <FurnitureDesign /> */}
           <ModernCollection />
           <Furnitures />
            {/* <Banner /> */}
           <Creative />
        </div>
    );
};

export default Home;