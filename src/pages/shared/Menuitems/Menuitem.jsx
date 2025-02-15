const Menuitem = ({item}) => {
   const {name,price,recipe,image}=item
    return (
        <div className="flex space-x-4">
           <img style={{borderRadius:'0px 200px 200px 200px'}} className="w-[100px]" src={image} alt="" /> 
           <div>
            <p className="uppercase">{name}-----------------------------------</p>
            <p>{recipe}</p>
           </div> 
           <p className="text-yellow-500">${price}</p>
        </div>
    );
};

export default Menuitem;