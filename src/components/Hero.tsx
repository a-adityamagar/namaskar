import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Calendar, Bed, Crown, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeBookingType, setActiveBookingType] = useState('room');

  const carouselImages = [
    'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/1743373/pexels-photo-1743373.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
  ];

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // Manual navigation functions
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
    );
  };

  const handleBookingTypeChange = (type: string) => {
    setActiveBookingType(type);
  };

  return (
    <section id="home" className="relative min-h-[calc(100vh-32px)] flex items-center justify-center overflow-hidden pt-20">
      {/* Auto-moving Carousel Background */}
      <div className="absolute inset-0">
        {carouselImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${image}")` }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{
              opacity: currentImageIndex === index ? 1 : 0,
              scale: currentImageIndex === index ? 1 : 1.05,
            }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
        ))}
        
        {/* Maroon Theme Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-maroon-800/60 via-maroon-900/50 to-black/70"></div>
        
        {/* Subtle Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer opacity-20"></div>
      </div>

      {/* Carousel Navigation Arrows */}
      <motion.button
        onClick={prevImage}
        className="absolute left-3 sm:left-6 md:left-10 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300"
        whileHover={{ scale: 1.1, x: -3 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.button>

      <motion.button
        onClick={nextImage}
        className="absolute right-3 sm:right-6 md:right-10 top-1/2 transform -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white transition-all duration-300"
        whileHover={{ scale: 1.1, x: 3 }}
        whileTap={{ scale: 0.95 }}
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              currentImageIndex === index 
                ? 'bg-yellow-400 w-6 sm:w-8' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center text-white w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          {/* Premium Badge */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-yellow-500/30 backdrop-blur-md border border-yellow-400/40 rounded-full px-3 sm:px-4 py-1 mb-4 sm:mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <Crown className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
            <span className="text-xs sm:text-sm font-medium text-yellow-100">Premium Luxury Experience</span>

          </motion.div>

          {/* Title */}
          <motion.h1 
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold mb-3 sm:mb-4 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Welcome to
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
              Namaskar Regency
            </span>
          </motion.h1>
          
          {/* Description */}
          <motion.p 
            className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-white/90 max-w-xl sm:max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Experience unparalleled luxury and comfort in the heart of Kathmandu with world-class amenities and exceptional service.
          </motion.p>

          {/* Premium CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              onClick={() => handleBookingTypeChange('room')}
              className={`group relative px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-semibold overflow-hidden shadow-md transition-all duration-300 ${
                activeBookingType === 'room' 
                  ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-white' 
                  : 'bg-gradient-to-r from-yellow-400/70 to-yellow-500/70 text-white/90'
              }`}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: '0 15px 30px -5px rgba(245, 158, 11, 0.4)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center space-x-2">
                <Bed className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Book Your Room</span>
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </motion.button>

            <motion.button
              onClick={() => handleBookingTypeChange('event')}
              className={`group relative px-6 sm:px-8 py-2.5 sm:py-3 rounded-xl text-sm sm:text-base font-semibold overflow-hidden shadow-md transition-all duration-300 ${
                activeBookingType === 'event' 
                  ? 'bg-gradient-to-r from-maroon-700 to-red-800 text-white' 
                  : 'bg-gradient-to-r from-maroon-700/70 to-red-800/70 text-white/90'
              }`}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: '0 15px 30px -5px rgba(179, 0, 0, 0.4)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-maroon-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center space-x-2">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Book Event</span>
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </motion.button>
          </motion.div>

          {/* Dynamic Booking Form */}
          <motion.div
            className="bg-white/15 backdrop-blur-xl rounded-xl p-3 sm:p-4 max-w-4xl sm:max-w-5xl mx-auto border border-white/20 shadow-lg relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            key={activeBookingType}
          >
            {/* Subtle Glossy Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-xl"></div>
            
            <div className="relative z-10">
              {/* Room Booking Form */}
              {activeBookingType === 'room' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
                    <Bed className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                    <h3 className="text-sm sm:text-base font-semibold text-white">Room Reservation</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-1 text-white/90">Check-in</label>
                      <input
                        type="date"
                        className="w-full px-2 sm:px-3 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-xs sm:text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-1 text-white/90">Check-out</label>
                      <input
                        type="date"
                        className="w-full px-2 sm:px-3 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-xs sm:text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-1 text-white/90">Guests</label>
                      <select className="w-full px-2 sm:px-3 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-xs sm:text-sm">
                        <option className="bg-slate-800 text-white" value="1">1 Guest</option>
                        <option className="bg-slate-800 text-white" value="2">2 Guests</option>
                        <option className="bg-slate-800 text-white" value="3">3 Guests</option>
                        <option className="bg-slate-800 text-white" value="4">4+ Guests</option>
                      </select>
                    </div>
                    <div className="flex items-end">
                      <motion.button
                        className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg font-medium shadow-md relative overflow-hidden group text-xs sm:text-sm"
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: '0 10px 20px -5px rgba(245, 158, 11, 0.3)'
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative">Check Availability</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Event Booking Form */}
              {activeBookingType === 'event' && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center justify-center space-x-2 mb-3 sm:mb-4">
                    <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
                    <h3 className="text-sm sm:text-base font-semibold text-white">Event Reservation</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-1 text-white/90">Event Date</label>
                      <input
                        type="date"
                        className="w-full px-2 sm:px-3 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-xs sm:text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-1 text-white/90">Event Type</label>
                      <select className="w-full px-2 sm:px-3 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-xs sm:text-sm">
                        <option className="bg-slate-800 text-white" value="wedding">Wedding</option>
                        <option className="bg-slate-800 text-white" value="corporate">Corporate Event</option>
                        <option className="bg-slate-800 text-white" value="conference">Conference</option>
                        <option className="bg-slate-800 text-white" value="party">Social Party</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs sm:text-sm font-medium mb-1 text-white/90">Expected Guests</label>
                      <select className="w-full px-2 sm:px-3 py-1.5 sm:py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-xs sm:text-sm">
                        <option className="bg-slate-800 text-white" value="50">Up to 50</option>
                        <option className="bg-slate-800 text-white" value="100">Up to 100</option>
                        <option className="bg-slate-800 text-white" value="200">Up to 200</option>
                        <option className="bg-slate-800 text-white" value="300">300+ Guests</option>
                      </select>
                    </div>
                    <div className="flex items-end">
                      <motion.button
                        className="w-full bg-gradient-to-r from-maroon-700 to-red-800 text-white py-1.5 sm:py-2 px-2 sm:px-3 rounded-lg font-medium shadow-md relative overflow-hidden group text-xs sm:text-sm"
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: '0 10px 20px -5px rgba(179, 0, 0, 0.3)'
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-maroon-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <span className="relative">Check Availability</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Premium Scroll Indicator */}
      {/* <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-white cursor-pointer bg-white/10 backdrop-blur-md rounded-full p-2 sm:p-3 border border-white/20"
        >
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.div>
      </motion.div> */}
    </section>
  );
};

export default Hero;