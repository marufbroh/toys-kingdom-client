import React from 'react';
import { Link } from 'react-router-dom';

const AllToysRow = ({ toy, index }) => {
    // console.log(toy);
    const { _id, toy_name, seller_name, sub_category, quantity, price } = toy;
    return (
        <tr className="hover">
            <th>{index + 1}</th>
            <td>{seller_name}</td>
            <td>{toy_name}</td>
            <td>{sub_category}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <td><Link to={`/toy/${_id}`} className='btn btn-sm'>View Details</Link></td>
        </tr>
    );
};

export default AllToysRow;