import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useData from '../../Hooks/UseData';


const Travelinfo = () => {

    const { userId } = useParams();

    const [tourInfo, setTourInfo] = useState({});
    useEffect(() => {
        const uri = `https://whispering-savannah-32344.herokuapp.com/places/${userId}`;
        fetch(uri)
            .then(res => res.json())
            .then(data => setTourInfo(data))
    }, [])

    const handleCartClick = () => {

        const uri = 'https://whispering-savannah-32344.herokuapp.com/myBooking';
        fetch(uri, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tourInfo)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    alert('successs.');
                }
            })
    }

    return (


        <div className="container">
            <div className="card h-100 p-5">
                <img className="card-img-top my-img" src={tourInfo.image} alt="" />
                <div className="card-body">
                    <h6 className="card-title text-end">{tourInfo.fees}$</h6>
                    <h5 className="card-title">{tourInfo.name}</h5>
                    <p className="card-text mt-auto mb-auto">{tourInfo.details}</p>
                    <div className="d-flex justify-content-between">
                        <div>
                            <p className="card-text">review : {tourInfo.review}</p>
                        </div>
                        <div >
                            <p className="card-text">days:{tourInfo.days}</p>
                        </div>
                    </div>
                    <div>
                        <button onClick={handleCartClick} className="btn btn-warning w-50"> Add cart</button>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Travelinfo;