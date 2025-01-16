import React from "react";
import { motion } from "framer-motion";
import silkBg from "@/assets/silk.png"; // Correctly import the silk image

const Hero = () => {
    return (
        <section className="relative h-screen w-screen flex flex-col justify-center items-center overflow-hidden">
            <motion.div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${silkBg})`,
                    backgroundSize: "200% 200%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",

                }}
                animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
                }}
                transition={{
                    duration: 5,
                    ease: "easeInOut",
                    repeat: Infinity
                }}
            />
            {/* Hero Content */}
            <div className="relative z-10 text-center text-black w-1/2 lg:w-1/3 px-4">
                <h1 className="text-6xl lg:text-9xl font-bold">
                        <span>Vinh</span>{" "}
                        <span className="text-blue-500">Bui</span>
                    </h1>
                <p className="text-md lg:text-2xl mt-4">Passionate about building user-friendly experiences and solving real-world problems with code</p>
            </div>
        </section>
    );
};

export default Hero;
