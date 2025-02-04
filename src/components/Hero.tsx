import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            We Create Digital Solutions
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Transform your business with our innovative digital strategies and creative solutions.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
            Get Started
          </button>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:w-1/2"
        >
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
            alt="Team working together" 
            className="rounded-lg shadow-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;