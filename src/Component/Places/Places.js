import React from 'react';
import useData from '../../Hooks/UseData';
import BestTrip from '../BestTrip/BestTrip';

const Places = () => {
    const [places, setPlaces]=useData();
    return (
        <div className="container mt-2">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                   {
                       places.map((data)=> <BestTrip data={data} key={data._id}></BestTrip>)
                   }
                </div>
        </div>
    );
};

export default Places;