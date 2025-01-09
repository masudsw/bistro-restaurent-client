import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../../assets/01.jpg'
import img2 from '../../../assets/02.jpg'
import img3 from '../../../assets/03.png'
import img4 from '../../../assets/04.jpg'


const Banner = () => {
    return (
        <div>
            <Carousel showArrows={true}
            showStatus={true}
            showThumbs={true}
            infiniteLoop={true}
            autoPlay={true}
            interval={2000}>
                <div>
                    <img src={img1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img3} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={img4} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
            
        </div>
    );
};

export default Banner;