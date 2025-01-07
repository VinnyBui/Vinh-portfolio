import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import bg from "@/assets/bg.jpg";

const Hero = () => {
    const [bgPosition, setBgPosition] = useState({ x: 0, y: 0 });
    
    useEffect(() => {
        const handleScroll = () => {
            setBgPosition((prev) => ({
                ...prev,
                y: window.scrollY / 5
            }));
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <motion.section 
            className="relative min-h-screen w-full flex flex-col justify-center items-center bg-cover bg-center"
            style={{
                backgroundImage: `url(${bg})`,
                backgroundPosition: `${bgPosition.x}% ${bgPosition.y}%`,
            }}
        >
            <div>
                <h1 className="text-white text-5xl bold">Vinh Bui</h1>
            </div>            
        </motion.section>
    );
};

export default Hero;
