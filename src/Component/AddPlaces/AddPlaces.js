import React from 'react';
import { useForm } from 'react-hook-form';
import './addPlaces.css'

const AddPlaces = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit =(data)=>{

        console.log(data);

        fetch('https://whispering-savannah-32344.herokuapp.com/places',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res =>res.json())
        .then(data=>{
            if(data.insertedId){
                alert('successs.');

                reset();

            }
        })

       
    }
    return (
        <div className="container mx-auto mt-5">

            <h3 className="text-center"> Add Places</h3>

            <form className="confirm-form" onSubmit={handleSubmit(onSubmit)}>

                <input placeholder="name" {...register("name")} />
                <textarea placeholder="Details" {...register("details")} />

                
                <input placeholder="Image" defaultValue="" {...register("image")} />
                <input type="number" placeholder="price"  {...register("fees")} />
                <input type="number" placeholder="Day"  {...register("days")} />
                <input  type="number" placeholder="Review"  {...register("review")} />

                <input type="submit" className="btn btn-danger w-100" />
            </form>
        </div>
    );
};

export default AddPlaces;