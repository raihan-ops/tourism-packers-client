import React, { useEffect, useState } from 'react';

const AllBookingInfo = () => {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        const uri = 'https://whispering-savannah-32344.herokuapp.com/bookingList';
        fetch(uri)
            .then(res => res.json())
            .then(data => setInfo(data))
    }, [])


    console.log(info);
    return (
        <div className=" container mt-5">
            {
                info.map((user) => <div className="border border-secondary p-2 border-2 mb-2">
                    <h5>Email: {user.email}</h5>
                    <h6>Booking list:</h6>
                    {
                        user.order.map((dat) => <div>
                            <p className="text-danger">{dat.name}</p>
                        </div>)
                    }
                    <h5>Date : {user.Date}</h5>
                </div>)
            }
        </div>
    );
};

export default AllBookingInfo;