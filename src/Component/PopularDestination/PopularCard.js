import React from 'react';
import { Link } from 'react-router-dom';

const PopularCard = (props) => {
    const {_id,name,details,image,fees,days,review} = props.data
    return (
        <div className="col">
            <div className="card h-100 ">
                <img className="card-img-top my-img h-75 w-100" src={image} alt="" />
                <div className="card-body">
                    <h6 className="card-title text-end">{fees}$</h6>
                    <h5 className="card-title">{name}</h5>


                    <div>
                        <Link to={`/travelInfo/${_id}`}>

                            <button className="btn btn-danger w-100">Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopularCard;