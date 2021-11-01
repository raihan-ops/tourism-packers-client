import React, { useEffect, useState } from 'react';
import useData from '../../Hooks/UseData';
import Banner from '../Banner/Banner';
import BestTrip from '../BestTrip/BestTrip';
import ChooseUs from '../ChooseUs/ChooseUs';
import PopularDestination from '../PopularDestination/PopularDestination';

const Home = () => {
    const [places, setPlaces]=useData();
    const newdata = places.slice(0, 6);

    
    return (
        <div>
           
            <div>
                <Banner></Banner>
            </div>
            <div className="container">
                <h1 className="text-center">Popular Places User</h1>
                <PopularDestination>

                </PopularDestination>
            </div>
            <div className="container">
                <h1 className="text-center">Best Value Trip</h1>
                <p className="text-center text-secondary">Best Offers Trips From Us.</p>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                   {
                       newdata.map((data)=> <BestTrip data={data} key={data._id}>
                         
                       </BestTrip>)
                   }
                </div>
            </div>

            <div className="container mt-5">
            <h3 className="text-center">Why Choose Us</h3>
            <p className="text-center text-muted">Here Are Reasons You Should Plan Trip With Us</p>
                <ChooseUs></ChooseUs>
            </div>
        </div>
    );
};

export default Home;