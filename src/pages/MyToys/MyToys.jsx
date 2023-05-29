import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
import { useEffect } from 'react';
import { useState } from 'react';
import MyToysRow from './MyToysRow';
import Swal from 'sweetalert2';

const MyToys = () => {
    document.title = "Toy KingDom || My Toys"
    const { user } = useContext(AuthContext)
    // console.log(user);
    const [mytoys, setMyToys] = useState([])
    const url = `https://ph-assignment-11-server-marufbroh.vercel.app/my-toys?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [url]);

    const handleDelete = id => {
        // console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://ph-assignment-11-server-marufbroh.vercel.app/my-toys/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data);
                        if (data.deletedCount > 0) {
                            const remaining = mytoys.filter(toy => toy._id !== id);
                            setMyToys(remaining)
                            Swal.fire(
                                'Deleted!',
                                'Your Toy has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="overflow-x-auto w-full container mx-auto my-12">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Toy Image</th>
                        <th>Toy Name</th>
                        <th>Sub-category</th>
                        <th>Available Quantity</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mytoys.map((toy, index) => <MyToysRow key={toy._id} toy={toy} index={index} handleDelete={handleDelete} />)
                    }
                </tbody>
            </table>

        </div>
    );
};

export default MyToys;