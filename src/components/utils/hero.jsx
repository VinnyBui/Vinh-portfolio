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
                    duration: 10,
                    ease: "easeInOut",
                    repeat: Infinity
                }}
            />
            {/* Hero Content */}
            <div className="relative z-10 text-center text-black">
                <h1 className="text-6xl font-bold">Vinh Bui</h1>
                <p className="text-2xl mt-4">Software Developer</p>
            </div>
        </section>
    );
};

export default Hero;
