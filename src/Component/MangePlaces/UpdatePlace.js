import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useData from '../../Hooks/UseData';

const UpdatePlace = () => {
    const [user, setUser] = useState({});
    const { upId } = useParams();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    useEffect(() => {
        const uri = `https://whispering-savannah-32344.herokuapp.com/places/${upId}`;
        fetch(uri)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])
    const onSubmit = (data) => {
        const url=`https://whispering-savannah-32344.herokuapp.com/places/${upId}`;
        fetch(url,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)

         })
         .then(res=>res.json())
         .then(data=>{
             if(data.modifiedCount >0){
                 alert("successfully updated");
                 setUser({});
             }
         })
    }
    return (
        <div className="container mx-auto mt-5">

            <h3 className="text-center"> Update Places</h3>

            <form className="confirm-form" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={user.name} placeholder="name" {...register("name")} />
                <textarea defaultValue={user.details} placeholder="Details" {...register("details")} />


                <input defaultValue={user.image} placeholder="Image" {...register("image")} />
                <input defaultValue={user.fees} type="number" placeholder="price"  {...register("fees")} />
                <input defaultValue={user.days} type="number" placeholder="Day"  {...register("days")} />
                <input defaultValue={user.review} type="number" placeholder="Review"  {...register("review")} />

                <input type="submit" className="btn btn-danger w-100" />
            </form>
        </div>
    );
};

export default UpdatePlace;