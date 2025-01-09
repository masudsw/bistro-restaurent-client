import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { FaQuoteLeft } from "react-icons/fa";

// import required modules
import { Navigation } from 'swiper/modules';
import SectionTitle from '../../../component/SectionTitle';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';

import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className='my-8'>
            <SectionTitle
                title="Testimonials"
                subtitle="What our client say"
            >
            </SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(item =>

                        <SwiperSlide key={item._id}>
                            <div className='flex flex-col items-center justify-center space-y-4'>
                                
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={item.rating}
                                />
                                <p className='text-8xl'>< FaQuoteLeft /></p>
                                <p className='text-center'>{item.details}</p>
                                
                                <p className='text-4xl uppercase text-yellow-500'>{item.name}</p>
                            </div>

                        </SwiperSlide>

                    )
                }


            </Swiper>
        </section>
    );
};

export default Testimonials;