import React from 'react';
import Furnitures from '../furnitures/Furnitures';
import MidChair from './BestFurniture';
import Creative from './Creative';
import ModernCollection from './ModernCollection';
import Buyer from './Buyer';
import WhatWeAre from './WhatWeAre';
import WhatWeDo from './WhatWeDo';
import WhyChooseUs from './WhyChooseUs';
import HomeBlog from './HomeBlog';
import Perfect from './Perfect';
import WeOffer from './WeOffer';
import Architectures from '../Architecture/Architectures';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
           <MidChair />
           <WhatWeAre />
           <WhatWeDo />
           <Buyer />
           <WhyChooseUs />
           <WeOffer />
           {/* <FurnitureDesign /> */}
           <ModernCollection />
           <Furnitures />
           <Architectures />
            {/* <Banner /> */}
           <Creative />
           <HomeBlog />
           <Perfect />
           <Reviews />
        </div>
    );
};

export default Home;