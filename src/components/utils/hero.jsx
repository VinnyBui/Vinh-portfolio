import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <motion.section 
            className="relative min-h-screen w-full flex flex-col justify-center items-center"
        >
            <div>
                <h1 className="text-white text-5xl bold">Vinh Bui</h1>
            </div>            
        </motion.section>
    );
};

export default Hero;
