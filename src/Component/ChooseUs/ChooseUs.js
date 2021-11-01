import React from 'react';
import one from './icon/one.png'
import two from './icon/two.png'
import three from './icon/three.png'

const ChooseUs = () => {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-5 mb-5 ">
            <div className="col ">
                <div className="card h-100 border border-2">
                    <img className="card-img-top my-img h-75 w-100" src={one} alt="" />
                    <div className="card-body">
                        <h6 className="card-title text-center">World Class Services</h6>
                        <p className="card-title text-center text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit eligendi cupiditate eaque, tempore ad eius!</p>
                    </div>
                </div>
            </div>


            <div className="col">
                <div className="card h-100 border border-2 ">
                    <img className="card-img-top my-img h-75 w-100" src={two} alt="" />
                    <div className="card-body">
                        <h6 className="card-title text-center">Best Price Guarantee</h6>
                        <p className="card-title text-center text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit eligendi cupiditate eaque, tempore ad eius!</p>
                    </div>
                </div>
            </div>


            <div className="col">
                <div className="card h-100  border border-2">
                    <img className="card-img-top my-img h-75 w-100" src={three} alt="" />
                    <div className="card-body">
                        <h6 className="card-title text-center">Handpicked Hotels</h6>
                        <p className="card-title text-center text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit eligendi cupiditate eaque, tempore ad eius!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChooseUs;