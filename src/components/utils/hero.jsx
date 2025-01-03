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
            <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 1 }}
                className="text-white px-4 py-8 md:px-8 space-y-4"
            >
                <h1 className="text-4xl md:text-6xl font-bold">Vinh Bui</h1>
                <p className="text-lg md:text-xl mt-4">Welcome to my portfolio</p>
            </motion.div>

        </section>
    )
}

export default Hero