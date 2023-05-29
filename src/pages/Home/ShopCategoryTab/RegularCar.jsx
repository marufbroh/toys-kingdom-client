import React, { useContext } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';
import { toast } from 'react-hot-toast';

const RegularCar = ({ rCar }) => {
    const { user } = useContext(AuthContext)
    const { _id, toy_img, toy_name, price, rating } = rCar;

    const navigate = useNavigate()
    const handleViewDetails = () => {
        if (!user) {
            toast('You have to log in first to view details', {
                icon: '👏',
            });
        }
        
        navigate(`/toy/${_id}`)
    }

    return (
        <div className="card w-full bg-base-100 shadow-xl rounded-xl ">
            <figure className="px-10 pt-10 h-full">
                <img src={toy_img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title font-bold text-3xl text-cyan-500">{toy_name}</h2>
                <Rating
                    style={{ maxWidth: 100 }}
                    value={rating}
                    readOnly
                />
                <h4 className='font-bold text-2xl'>Rating: {rating}</h4>
                <div className="flex items-center justify-between">
                    <h4 className='font-bold text-2xl'>Price: ${price}</h4>
                    <button onClick={handleViewDetails} className="btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default RegularCar;