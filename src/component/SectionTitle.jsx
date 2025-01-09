

const SectionTitle = ({title,subtitle}) => {
    return (
        <div className="mx-auto md:w-3/12 text-center my-8">
           <p className="text-yellow-600">---{subtitle}---</p> 
            <h1 className="uppercase text-3xl border-y-4  py-4">{title}</h1>
            
        </div>
    );
};

export default SectionTitle;