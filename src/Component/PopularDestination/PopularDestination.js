import React from 'react';
import useData from '../../Hooks/UseData';

import PopularCard from './PopularCard';

const PopularDestination = () => {
    const [popular,setPopular]=useData();
    return (
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4 mt-3">
            {
                popular.filter(place => place.review === 5).map(data =><PopularCard data={data}></PopularCard>
                    
               )
            }
        </div>
    );
};

export default PopularDestination;