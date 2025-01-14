import React from 'react';
import bg from "@/assets/bg.jpg";
const Hero = () => {
    return (
    <section className="h-screen w-screen overflow-hidden">
        <div
            className="bg-cover bg-center h-2/5 m-24  border border-white rounded-md"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <h1 className="text-white text-bold text-3xl text-center pt-10">
                Title Goes Here
            </h1>
        </div>
        {/* BIO */}
        <div className="m-24 flex justify-between">
            <div>
                <h1>Vinh Bui</h1>
            </div>
            <div>
                <p>Software developer looking for work</p>
            </div>
        </div>
    </section>
    );
};

export default Hero;


