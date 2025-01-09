import { Parallax, Background } from 'react-parallax';
const Cover = ({ image, title }) => {
    return (
        <Parallax
            blur={{ min: -500, max: 500 }}
            bgImage={image}
            bgImageAlt={title}
            strength={-200}
        >
            {/* Blur transition from min to max */}
            {/* <div style={{ height: '200px' }} /> */}
            <div className="hero h-[600px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;