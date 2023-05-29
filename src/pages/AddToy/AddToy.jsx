import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../providers/AuthProviders';
import Swal from 'sweetalert2';

const AddToy = () => {
    document.title = "Toy KingDom || Add A Toy"
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch("https://ph-assignment-11-server-marufbroh.vercel.app/add-toy", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if(data.acknowledged){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
    };

    return (
        <section className='container mx-auto bg-gradient-to-r from-blue-50 to-cyan-50 lg:p-24 p-4 my-12 rounded-lg'>
            <div className='text-center'>
                <h3 className='text-3xl font-bold mb-3'>Add a new toy!</h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='md:flex gap-3'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Your Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" {...register("seller_name")} defaultValue={user?.displayName} readOnly className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Toy Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" {...register("toy_name")} required className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Toy Image Link</span>
                        </label>
                        <label className="input-group">
                            <input type="url" {...register("toy_img")} required className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className='md:flex gap-3'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Your Email</span>
                        </label>
                        <label className="input-group">
                            <input type="email" {...register("seller_email")} defaultValue={user?.email} readOnly className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="number" step="any" {...register("price")} required placeholder="$" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="number" {...register("quantity")} required className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className='md:flex gap-3'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Sub-Category</span>
                        </label>
                        <select type="text" {...register("sub_category")} required className="select select-bordered w-full">
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
                            <input type="number" step="any" {...register("rating", { min: 1, max: 5 })} required className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text font-bold">Total Review</span>
                        </label>
                        <label className="input-group">
                            <input type="number" {...register("review")} required className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="form-control ">
                    <label className="label">
                        <span className="label-text font-bold">Detail Description</span>
                    </label>
                    <label className="input-group">
                        <textarea {...register("description")} required className="textarea textarea-bordered textarea-lg w-full" placeholder="Toy Description"></textarea>
                    </label>
                </div>
                <div className='flex w-full mt-4'>
                    <button className='bg-color p-3 rounded w-full font-bold text-white' type="submit">Add Toy</button>
                </div>
            </form>
        </section>
    );
};

export default AddToy;