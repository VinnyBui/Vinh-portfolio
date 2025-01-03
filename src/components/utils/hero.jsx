import React from 'react';
import { motion } from 'framer-motion';
import bg from "@/assets/bg.jpg";

const Hero = () => {
    return (
        <motion.section 
            className="relative min-h-screen w-full flex flex-col justify-center items-center bg-cover bg-center"
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

    )
}

export default Hero