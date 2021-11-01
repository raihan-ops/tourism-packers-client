import React from 'react';
import { Link } from 'react-router-dom';
import useData from '../../Hooks/UseData';

const ManagePlaces = () => {
    const [places, setPlaces] = useData();

    // handle delete
    const handleDelete = (id) => {
        const procced = window.confirm('Are you want to Delete');
        if (procced) {
            const url = `https://whispering-savannah-32344.herokuapp.com/places/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("deleted");
                        const remaningUsers = places.filter(user => user._id !== id);
                        setPlaces(remaningUsers);
                    }
                })
        }

    }
    return (
        <div className="container">
            {
                places.map((data) => <div className="container bg-dark text-white d-flex p-2 m-2 justify-content-between ">
                    <h5>{data.name}</h5>
                    <Link to={`/managePlaces/update/${data._id}`}>
                        <button className="btn btn-outline-light btn-sm">Update</button>
                    </Link>

                    <button className="btn btn-outline-light btn-sm" onClick={() => handleDelete(data._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManagePlaces;