import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useLoaderData, useNavigate } from 'react-router-dom';

const SingleToyDetails = () => {
    document.title = "Toy KingDom || Single Details"
    const singleToy = useLoaderData();
    const { _id, toy_img, toy_name, price, rating, sub_category, quantity, review, description, seller_name, seller_email } = singleToy;
    const navigate = useNavigate()
    return (
        <div className='container mx-auto my-12'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className='lg:w-1/2 p-10'><img className='rounded-xl' src={toy_img} alt="Toy Image" /></figure>
                <div className="card-body lg:w-1/2 h-full my-auto">
                    <h2 className="card-title font-bold text-4xl text-cyan-500">{toy_name}</h2>
                    <div>
                    <p className='text-md'>{seller_name} (Seller)</p>
                    <p className='text-md'>{seller_email}</p>
                    </div>
                    <div className='flex gap-2'>
                        <Rating
                            style={{ maxWidth: 100 }}
                            value={rating}
                            readOnly
                        />
                        <h4 className='font-bold text-xl'>{rating}</h4>
                    </div>
                    <h4 className='font-bold text-xl'>Review: {review}</h4>
                    <h4 className='font-bold text-xl'>Available Quantity: {quantity}</h4>
                    <h4 className='font-bold text-xl'>Sub-Category: {sub_category}</h4>
                    <h4 className='font-bold text-xl'>Price: ${price}</h4>
                    <h4 className='font-bold text-xl'>Description:</h4>
                    <p className='font-extralight'>{description}</p>
                    <div className="card-actions justify-end mt-8">
                        <button onClick={() => navigate(-1)} className="btn-primary">Back to Category</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToyDetails;