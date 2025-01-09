import SectionTitle from "../../component/SectionTitle";
import Banner from "./Banner/Banner";
import Chefservice from "./Banner/Chefservice";
import Callus from "./Callus/Callus";
import Category from "./category/Category";
import Featured from "./featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Recommended from "./ShefRecommended/Recommended";
import Testimonials from "./testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Chefservice/>
            <Category/>
            <PopularMenu/>
            <Featured/>
            <Testimonials/>
            <Recommended/>
            <Callus/>
            
        </div>
    );
};

export default Home;