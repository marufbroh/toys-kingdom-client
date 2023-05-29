import React, { useEffect, useState } from 'react';
import AllToysRow from './AllToysRow';
import { useLoaderData } from 'react-router-dom';

const AllToys = () => {
    document.title = "Toy KingDom || All Toys"
    const loadedToys = useLoaderData();
    const [toys, setToys] = useState(loadedToys)
    const [searchText, setSearchText] = useState("")

    const handleSearch = () => {
        if (!searchText) {
            return setToys(loadedToys)
        }
        fetch(`https://ph-assignment-11-server-marufbroh.vercel.app/toySearch/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setToys(data);
            })
    }

    return (
        <div className="overflow-x-auto w-full container mx-auto my-12">
            <div className="form-control mb-6">
                <div className="input-group">
                    <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search…" className="input input-bordered" />
                    <button onClick={handleSearch} className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Seller Name</th>
                        <th>Toy Name</th>
                        <th>Sub-category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map((toy, index) => <AllToysRow key={toy._id} toy={toy} index={index} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;