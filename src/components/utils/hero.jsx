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
                    backgroundPosition: ["0% 45%", "100% 60%", "0% 45%"] 
                }}
                transition={{
                    duration: 10,
                    ease: "easeInOut",
                    repeat: Infinity
                }}
            />
            {/* Hero Content */}
            <div className="relative z-10 text-center text-black w-1/2 lg:w-1/3 px-4">
                <h1 className="text-6xl lg:text-9xl font-bold">
                    <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                        >
                            Vinh
                        </motion.span>{" "}
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7, duration: 1 }}
                            className="text-blue-500"
                        >
                            Bui
                        </motion.span>
                    </h1>
                    {/* Animated Content */}
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 1.5 }}
                        className="text-md lg:text-2xl mt-4"
                    >
                        Passionate about building user-friendly experiences and solving real-world problems with code
                    </motion.p>
            </div>
        </section>
    );
};

export default Hero;
