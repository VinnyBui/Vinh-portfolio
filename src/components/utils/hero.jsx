import React from 'react';
import { motion } from 'framer-motion';
import bg from "@/assets/bg.jpg";

const Hero = () => {
    return (
        <section 
            className="relative min-h-screen w-full mx-auto md:h-screen md:block flex flex-col justify-end items-start bg-cover bg-center" 
            style={{ backgroundImage: `url(${bg})` }}
            aria-label="Hero Section"
        >
        <motion.section 
            className="relative min-h-screen flex flex-col justify-center items-center bg-cover bg-center"
            style={{ backgroundImage: `url(${bg})` }}
            animate={{
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
            }}
        >
            <h1 className="text-white text-5xl">Vinh Bui</h1>
        </motion.section>


        </section>
    )
}

export default Hero