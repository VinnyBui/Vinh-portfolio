import React from 'react';
import bg from "@/assets/bg.jpg";
const Hero = () => {
    return (
    <section className="h-screen w-screen overflow-hidden flex flex-col">
        <div
            className="bg-cover bg-center h-2/5 m-24  border border-white rounded-md"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <h1 className="text-white text-bold text-3xl text-center pt-10">
                Title Goes Here
            </h1>
        </div>
        {/* BIO */}
        <div className="flex-grow mx-24 mb-24 flex justify-between">
            <div className="bg-red-500 w-1/2">
                <h1 className='text-black'>Vinh Bui</h1>
            </div>
            <div className="bg-blue-500 w-1/2">
                <p>Software developer looking for work</p>
            </div>
        </div>
    </section>
    );
};

export default Hero;


