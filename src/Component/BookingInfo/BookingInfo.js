import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/UseAuth';
import { useForm } from 'react-hook-form';
import './BookingInfo.css'

const BookingInfo = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [bookingInfo, setBookingInfo] = useState([]);


    useEffect(() => {
        const uri = 'https://whispering-savannah-32344.herokuapp.com/myBooking';
        fetch(uri)
            .then(res => res.json())
            .then(data => setBookingInfo(data))
    }, [])

    const onSubmit = (data) => {
        const savedBooking = bookingInfo;
        data.order = savedBooking;

        fetch('https://whispering-savannah-32344.herokuapp.com/bookingList', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    alert('successs.');
                    clearCollection();
                }
            });


        
    }

    const clearCollection = () => {

        // for empty databaseee
        const uri = 'https://whispering-savannah-32344.herokuapp.com/myBooking';
        fetch(uri, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {});
    }

    // single item delete
    const handleSingleDelete = (id) => {
        const procced = window.confirm('Are you want to Delete');
        if (procced) {
            const url = `https://whispering-savannah-32344.herokuapp.com/myBooking/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("deleted");
                        const remaningUsers = bookingInfo.filter(user => user._id !== id);
                        setBookingInfo(remaningUsers);
                    }
                })
        }



    }


    return (
        <div className="row">
            <h1 className="text-center">Booking info</h1>
            <div className="col col-lg-8">

                {
                    bookingInfo.map((data) => <div className="" >
                        <div class="card mb-3 w-75 border border-4 mx-auto mt-2">
                            <div class="row g-0">
                                <div class="col-md-4">
                                    <img className="h-100 w-100" src={data.image} class="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{data.name}</h5>
                                        <p class="card-text">{data.details}</p>
                                        <p class="card-text"><small class="text-muted"><button className="btn btn-success" onClick={() => { handleSingleDelete(data._id) }}> Delete</button></small></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <h5>Name :{data.name}</h5>
                        <button onClick={() => { handleSingleDelete(data._id) }}> Delete</button> */}
                    </div>)
                }
            </div>

           
            <div className="col col-lg-4 mt-2">
                <form className="confirm-form" onSubmit={handleSubmit(onSubmit)}>

                    <input defaultValue={user.displayName} {...register("name")} />

                    <input defaultValue={user.email} {...register("email", { required: true })} />
                    {errors.email && <span className="error">This field is required</span>}
                    <input placeholder="Address" defaultValue="" {...register("address")} />
                    <input placeholder="City" defaultValue="" {...register("city")} />
                    <input placeholder="Date" defaultValue="" {...register("Date")} />
                    <input placeholder="phone number" defaultValue="" {...register("phone")} />

                    <input type="submit" className="btn btn-danger w-100" />
                </form>
            </div>

        </div>
    );
};

export default BookingInfo;