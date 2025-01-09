import chefservice from '../../../assets/chef-service.jpg'

const Chefservice = () => {
    return (
        <div
            className="hero h-[400px]"
            style={{
                backgroundImage: `url(${chefservice})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            >
            <div className=" "></div>
            <div className="hero-content text-gray text-center bg-white ">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5 ">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    
                </div>
            </div>
        </div>
    );
};

export default Chefservice;