import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../component/SectionTitle';

const Recommended = () => {
    const [recommended, setRecommended] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then((data) => {
                // Shuffle the data and pick the first 3 items
                const shuffledData = data.sort(() => 0.5 - Math.random());
                const randomItems = shuffledData.slice(0, 3);
                setRecommended(randomItems);
            });
    }, [])
    return (
        <section className='my-8'>
            <SectionTitle
                title="Chefs Recommends"
                subtitle="Should I try"
            >
            </SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {recommended.map(item =>
                    < div className="card bg-base-100 w-96 shadow-xl" >
                        <figure>
                            <img
                                src={item.image}
                                alt={item.name} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.name}</h2>
                            <p>{item.recipe}</p>
                            <div className="card-actions justify-center">
                                <button className="btn btn-outline bg-gold-600   uppercase text-xl border-0 border-b-4">Add to card</button>
                            </div>

                        </div>
                    </div>

                )}
            </div>



        </section >
    );
};

export default Recommended;