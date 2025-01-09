import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/slide1.jpg'
import slide2 from '../../../assets/slide2.jpg'
import slide3 from '../../../assets/slide3.jpg'
import slide4 from '../../../assets/slide4.jpg'
import slide5 from '../../../assets/slide5.jpg'
import SectionTitle from '../../../component/SectionTitle';


const Category = () => {
    return (
        <div>
            <SectionTitle title="order online" subtitle="From 11am to 10pm">
            </SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h1 className='uppercase text-center text-white -mt-16 text-4xl'>salad</h1>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h1 className='uppercase text-center text-white -mt-16 text-4xl'>soups</h1>
                    </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h1 className='uppercase text-center text-white -mt-16 text-4xl'>pizza</h1>
                    </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h1 className='uppercase text-center text-white -mt-16 text-4xl'>disserts</h1>
                    </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h1 className='uppercase text-center text-white -mt-16 text-4xl'>salad</h1>
                    </SwiperSlide>
                
            </Swiper> 
        </div>
    );
};

export default Category;