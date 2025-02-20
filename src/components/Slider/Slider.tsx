import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sliderData } from './SliderData';
import SliderControls from './SliderControls';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % sliderData.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  }, []);

  return (
    <div id="home" className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${sliderData[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-#0c0718" />
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="max-w-3xl"
              >
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 whitespace-pre-line">
                  {sliderData[currentSlide].title}
                </h1>
                <p className="text-xl text-white/90">
                  {sliderData[currentSlide].subtitle}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      <SliderControls onPrevClick={prevSlide} onNextClick={nextSlide} />
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {sliderData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentSlide ? 'bg-blue-600' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;