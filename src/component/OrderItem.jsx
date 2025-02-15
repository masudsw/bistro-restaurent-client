import React from 'react';

const OrderItem = ({items}) => {
    const {image,name,recipe,price}=items;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt={name} />
            </figure> 
            <p className='bg-black w-20 text-white ml-8 absolute right-0'>${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default OrderItem;