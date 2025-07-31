import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Calendar, Bed, Sparkles, Crown, ChevronLeft, ChevronRight, Users, Clock, MapPin } from 'lucide-react';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeBookingType, setActiveBookingType] = useState<'room' | 'event'>('room'); // Type activeBookingType

  const carouselImages = [
    'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
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

  // Type 'type' as 'room' or 'event'
  const handleBookingTypeChange = (type: 'room' | 'event') => {
    setActiveBookingType(type);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Auto-moving Carousel Background */}
      <div className="absolute inset-0">
        {carouselImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url("${image}")` }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: currentImageIndex === index ? 1 : 0,
              scale: currentImageIndex === index ? 1 : 1.1,
            }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        ))}
        
        {/* Maroon Theme Overlay with Premium Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-maroon-700/70 via-maroon-800/60 to-black/80"></div>
        
        {/* Premium Shine Effect */}
        <div className="absolute inset-0 bg-shimmer bg-[length:200%_100%] animate-shimmer opacity-10"></div>
        
        {/* Floating Particles Effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-yellow-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Carousel Navigation Arrows */}
      <motion.button
        onClick={prevImage}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        whileHover={{ scale: 1.1, x: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft className="w-6 h-6" />
      </motion.button>

      <motion.button
        onClick={nextImage}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
        whileHover={{ scale: 1.1, x: 2 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentImageIndex === index 
                ? 'bg-yellow-400 w-8' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Content - Compact for Better First View */}
      <div className="relative z-10 max-w-8xl mx-auto px-6 text-center text-white w-full">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          {/* Premium Badge - Smaller */}
          <motion.div
            className="inline-flex items-center space-x-2 bg-yellow-500/20 backdrop-blur-md border border-yellow-400/30 rounded-full px-3 py-1 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
          >
            <Crown className="w-3 h-3 text-yellow-400" />
            <span className="text-xs font-medium text-yellow-100">Premium Luxury Experience</span>
            <Sparkles className="w-3 h-3 text-yellow-400" />
          </motion.div>

          {/* Smaller Title */}
          <motion.h1 
            className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-3 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Welcome to
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 animate-float">
              Namaskar Regency
            </span>
          </motion.h1>
          
          {/* Smaller Description */}
          <motion.p 
            className="text-sm md:text-base mb-6 text-white/90 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Experience luxury and comfort in the heart of Kathmandu with exceptional service and world-class amenities.
          </motion.p>

          {/* Compact Premium CTAs */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              onClick={() => handleBookingTypeChange('room')}
              className={`group relative px-8 py-3 rounded-2xl text-base font-semibold overflow-hidden shadow-2xl transform transition-all duration-300 ${
                activeBookingType === 'room' 
                  ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-white' 
                  : 'bg-gradient-to-r from-yellow-400/80 to-yellow-500/80 text-white/90'
              }`}
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: '0 25px 50px -12px rgba(245, 158, 11, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-shimmer bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-30"></div>
              <div className="relative flex items-center justify-center space-x-2">
                <Bed className="w-5 h-5" />
                <span>Book Your Room</span>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </motion.button>

            <motion.button
              onClick={() => handleBookingTypeChange('event')}
              className={`group relative px-8 py-3 rounded-2xl text-base font-semibold overflow-hidden shadow-2xl transform transition-all duration-300 ${
                activeBookingType === 'event' 
                  ? 'bg-gradient-to-r from-maroon-700 to-red-800 text-white' 
                  : 'bg-gradient-to-r from-maroon-700/80 to-red-800/80 text-white/90'
              }`}
              whileHover={{ 
                scale: 1.05, 
                y: -3,
                boxShadow: '0 25px 50px -12px rgba(179, 0, 0, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-maroon-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-shimmer bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-30"></div>
              <div className="relative flex items-center justify-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>Book Event</span>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </motion.button>
          </motion.div>

          {/* Wider & Lower Height Dynamic Booking Form */}
          <motion.div
            className="bg-white/10 backdrop-blur-3xl rounded-2xl p-3 max-w-6xl mx-auto border border-white/20 shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            key={activeBookingType}
          >
            {/* Glossy overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-2xl"></div>
            
            <div className="relative z-10">
              {/* Room Booking Form */}
              {activeBookingType === 'room' && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <Bed className="w-4 h-4 text-yellow-400" />
                    <h3 className="text-base font-semibold text-white">Room Reservation</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                    <div>
                      <label className="block text-xs font-medium mb-1 text-white/90">Check-in</label>
                      <input
                        type="date"
                        className="w-full px-3 py-2 bg-white/15 backdrop-blur-md border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1 text-white/90">Check-out</label>
                      <input
                        type="date"
                        className="w-full px-3 py-2 bg-white/15 backdrop-blur-md border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1 text-white/90">Guests</label>
                      <select className="w-full px-3 py-2 bg-white/15 backdrop-blur-md border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-sm">
                        <option className="bg-slate-800 text-white" value="1">1 Guest</option>
                        <option className="bg-slate-800 text-white" value="2">2 Guests</option>
                        <option className="bg-slate-800 text-white" value="3">3 Guests</option>
                        <option className="bg-slate-800 text-white" value="4">4+ Guests</option>
                      </select>
                    </div>
                    <div className="flex items-end">
                      <motion.button
                        className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-2 px-3 rounded-lg font-medium shadow-lg relative overflow-hidden group text-sm"
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: '0 10px 25px -5px rgba(245, 158, 11, 0.4)'
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="absolute inset-0 bg-shimmer bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-50"></div>
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
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <Calendar className="w-4 h-4 text-yellow-400" />
                    <h3 className="text-base font-semibold text-white">Event Reservation</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                    <div>
                      <label className="block text-xs font-medium mb-1 text-white/90">Event Date</label>
                      <input
                        type="date"
                        className="w-full px-3 py-2 bg-white/15 backdrop-blur-md border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1 text-white/90">Event Type</label>
                      <select className="w-full px-3 py-2 bg-white/15 backdrop-blur-md border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-sm">
                        <option className="bg-slate-800 text-white" value="wedding">Wedding</option>
                        <option className="bg-slate-800 text-white" value="corporate">Corporate Event</option>
                        <option className="bg-slate-800 text-white" value="conference">Conference</option>
                        <option className="bg-slate-800 text-white" value="party">Social Party</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium mb-1 text-white/90">Expected Guests</label>
                      <select className="w-full px-3 py-2 bg-white/15 backdrop-blur-md border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all text-sm">
                        <option className="bg-slate-800 text-white" value="50">Up to 50</option>
                        <option className="bg-slate-800 text-white" value="100">Up to 100</option>
                        <option className="bg-slate-800 text-white" value="200">Up to 200</option>
                        <option className="bg-slate-800 text-white" value="300">300+ Guests</option>
                      </select>
                    </div>
                    <div className="flex items-end">
                      <motion.button
                        className="w-full bg-gradient-to-r from-maroon-700 to-red-800 text-white py-2 px-3 rounded-lg font-medium shadow-lg relative overflow-hidden group text-sm"
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: '0 10px 25px -5px rgba(179, 0, 0, 0.4)'
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="absolute inset-0 bg-shimmer bg-[length:200%_100%] animate-shimmer opacity-0 group-hover:opacity-50"></div>
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
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white cursor-pointer bg-white/10 backdrop-blur-md rounded-full p-3 border border-white/20"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;