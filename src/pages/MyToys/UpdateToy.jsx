import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const UpdateToy = () => {
    document.title = "Toy KingDom || Update Toy"
    const toy = useLoaderData();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (toy) => {
        // console.log(toy);
        fetch(`https://ph-assignment-11-server-marufbroh.vercel.app/my-toys/${toy._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.acknowledged) {
                    // setControl(!control)
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <section className='container mx-auto bg-gradient-to-r from-blue-50 to-cyan-50 lg:p-24 p-4 my-12 rounded-lg'>
            <div className='text-center'>
                <h3 className='text-3xl font-bold mb-3'>Update Toy!</h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" {...register("_id")} defaultValue={toy?._id} className='hidden' />
                <div className='md:flex gap-3'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Your Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={toy?.seller_name} readOnly className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Toy Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" {...register("toy_name")} defaultValue={toy?.toy_name} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Toy Image Link</span>
                        </label>
                        <label className="input-group">
                            <input type="url" {...register("toy_img")} defaultValue={toy?.toy_img} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className='md:flex gap-3'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Your Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" defaultValue={toy?.seller_email} readOnly className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="number" step="any" {...register("price")} defaultValue={toy?.price} placeholder="$" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="number" {...register("quantity")} defaultValue={toy?.quantity} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='md:flex gap-3'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Sub-Category</span>
                        </label>
                        <select type="text" {...register("sub_category")} defaultValue={toy?.sub_category} className="select select-bordered w-full">
                            {/* <option disabled selected>Pick one</option> */}
                            <option value="sports-car">Sports Car</option>
                            <option value="police-car">Police Car</option>
                            <option value="regular-car">Regular Car</option>
                        </select>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="number" step="any" {...register("rating", { min: 1, max: 5 })} defaultValue={toy?.rating} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Total Review</span>
                        </label>
                        <label className="input-group">
                            <input type="number" {...register("review")} defaultValue={toy?.review} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="form-control ">
                    <label className="label">
                        <span className="label-text font-bold">Detail Description</span>
                    </label>
                    <label className="input-group">
                        <textarea {...register("description")} defaultValue={toy?.description} className="textarea textarea-bordered textarea-lg w-full" placeholder="Toy Description"></textarea>
                    </label>
                </div>
                <div className='flex w-full mt-4'>
                    <button className='bg-color p-3 rounded w-full font-bold text-white' type="submit">Update</button>
                </div>
            </form>
        </section>
    );
};

export default UpdateToy;