
import SectionTitle from "../../../component/SectionTitle";
import Menuitem from "../../shared/Menuitems/Menuitem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu]=useMenu();
    console.log(menu);
    const popularMenu=menu.filter(item=>item.category==='popular');
    console.log(popularMenu);

    
    return (

        <section className="mb-12">
            <SectionTitle
                title="From our menu"
                subtitle="Check it out"
            >
            </SectionTitle>
            
            <div className="grid md:grid-cols-2 gap-12">
                {/* Properly map over popularMenu and render MenuItem components */}
                {popularMenu.map(item => (
                    <Menuitem key={item._id} item={item} />
                ))}
            </div>
            <div className="flex justify-center items-center my-8">
            <button className="btn btn-outline uppercase text-2xl border-0 border-b-4">View Full Menu</button>
            </div>
        </section>
    );
}; 

export default PopularMenu;