import Cover from "../../component/Cover";
import bgimg from '../../assets/menu/banner3.jpg'
import useMenu from "../../hooks/useMenu";
import { Helmet } from "react-helmet";
import SectionTitle from "../../component/SectionTitle";
import MenuCategory from "../../component/MenuCategory";
import desertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/soup-bg.jpg'

const Menu = () => {
    const [menu]=useMenu();
    const dessert=menu.filter(item=>item.category==='dessert');
    const pizza=menu.filter(item=>item.category==='pizza');
    const salad=menu.filter(item=>item.category==='salad');
    const soup=menu.filter(item=>item.category==='soup');
    const offered=menu.filter(item=>item.category==='offered');
    
    return (
        <div>
            <Helmet>Bistroboss|Menu</Helmet>
           <Cover image={bgimg} title="our menu"></Cover>   
           <SectionTitle title="Today's offer" subtitle="Don't miss" ></SectionTitle>
           <MenuCategory item={offered}></MenuCategory>
           {/* dessert menu item */}
           <MenuCategory title="Desserts" coverImg={desertImg} item={dessert}></MenuCategory>
           <MenuCategory title="Pizza" coverImg={pizzaImg} item={pizza}></MenuCategory>
           <MenuCategory title="Salad" coverImg={saladImg} item={salad}></MenuCategory>
           <MenuCategory title="Soup" coverImg={soupImg} item={soup}></MenuCategory>
        </div>
    );
};

export default Menu;