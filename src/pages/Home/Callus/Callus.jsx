import React from 'react';


const Callus = () => {
    const numberStyle = [
        // { transform: 'translateY(0px)' },   // +
        // { transform: 'translateY(0px)' },   // 8
        // { transform: 'translateY(0px)' },   // 8
        { transform: 'translateY(0px)' },  // 0
        { transform: 'translateY(0px)' },   // 1
        { transform: 'translateY(3px)' },  // 9
        { transform: 'translateY(0px)' },   // 2
        { transform: 'translateY(3px)' },  // 3
        { transform: 'translateY(3px)' },   // 4
        { transform: 'translateY(3px)' },  // 5
        { transform: 'translateY(-3px)' },   // 6
        { transform: 'translateY(3px)' },  // 7
        { transform: 'translateY(-3px)' },   // 8
        { transform: 'translateY(3px)' },  // 9
        { transform: 'translateY(0px)' },   // 1
        { transform: 'translateY(0px)' },  // 0
    ];
    const phoneNumber = "0192345678910".split("");
    return (
        // <div className='h-80 bg-black flex justify-center items-center'>
        //     <h1 className='w-[648px] h-[59px] font-raleway text-4xl font-bold text-white pl-8'>Call Us:<span className='text-5xl'>+88</span>  01<span className='text-5xl pt-4'>9</span>2<span className='text-5xl'>3456789</span>10</h1>
        // </div>
        <div className="h-80 bg-black flex justify-center items-center font-raleway text-4xl font-bold  text-white  py-4">
            <p className="">
                Call Us:+88{" "}
                {phoneNumber.map((char, index) => (
                    <span
                        key={index}
                        className="inline-block"
                        style={numberStyle[index] || {}}
                    >
                        {char}
                    </span>
                ))}
            </p>
        </div>
    );
};

export default Callus; 