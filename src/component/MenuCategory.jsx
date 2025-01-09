import Menuitem from "../pages/shared/Menuitems/Menuitem";
import Cover from "./Cover";

const MenuCategory = ({ item, title, coverImg }) => {
    return (
        <div className="pt-8">
            {title && <Cover image={coverImg} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-12 mt-16">
                {/* Properly map over popularMenu and render MenuItem components */}
                {item.map(item => (
                    <Menuitem key={item._id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default MenuCategory;