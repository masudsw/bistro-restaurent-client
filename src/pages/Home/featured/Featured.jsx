import SectionTitle from "../../../component/SectionTitle";
import featured from '../../../assets/featured.jpg'
import './featured.css'

const Featured = () => {
    return (
        <div className="featured-item text-white bg-fixed pt-8 mt-20"> 
        <section>
            <SectionTitle
            title="From the munu" subtitle="check it out"
            >
            </SectionTitle>
            
            <div className="md:flex justify-center items-center px-16 py-8 bg-slate-500 bg-opacity-40">
                <img className="md:w-1/2 p-4" src={featured} alt="" />
                <div>
                    <p>March 20,2024</p>
                    <h1 className="uppercase text-4xl">Where can I get some</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At excepturi reiciendis libero voluptate mollitia ratione aut vero cum vel est, assumenda quibusdam perspiciatis! Sapiente distinctio perferendis perspiciatis laborum ex expedita. Quibusdam nesciunt assumenda aspernatur animi quidem blanditiis reiciendis ipsum nemo deleniti veritatis. Veritatis, perferendis labore nulla voluptatum possimus sit mollitia.</p>
                    <button className="btn btn-outline border-0 border-b-4">Read More</button>
                </div>
            </div>
            
        </section>
        </div>

    );
};

export default Featured;