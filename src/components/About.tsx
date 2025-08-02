import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Heart, Coffee } from 'lucide-react';

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Carousel images for the About section
  const carouselImages = [
    {
      src: 'https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      alt: 'Luxury Hotel Lobby',
      title: 'Grand Lobby'
    },
    {
      src: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      alt: 'Hotel Exterior View',
      title: 'Hotel Exterior'
    },
    {
      src: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      alt: 'Deluxe Room Interior',
      title: 'Deluxe Room'
    },
    {
      src: 'https://images.pexels.com/photos/1743373/pexels-photo-1743373.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      alt: 'Executive Suite',
      title: 'Executive Suite'
    },
    {
      src: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      alt: 'Fine Dining Restaurant',
      title: 'Restaurant'
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const features = [
    {
      icon: Shield,
      title: 'Safety First',
      description: '24/7 security protocols for your peace of mind.'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized for excellence in hospitality.'
    },
    {
      icon: Heart,
      title: 'Personal Service',
      description: 'Dedicated staff for memorable experiences.'
    },
    {
      icon: Coffee,
      title: 'Premium Amenities',
      description: 'World-class facilities and fine dining.'
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 to-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold text-slate-800 mb-4 sm:mb-6 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Discover Luxury at
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-maroon-600 to-maroon-700 block">
                Namaskar Regency
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-sm sm:text-base md:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Nestled in the vibrant heart of Kathmandu, Namaskar Regency blends traditional Nepalese hospitality with modern elegance, ensuring every guest enjoys an unforgettable stay.
            </motion.p>

            <motion.button
              className="relative bg-gradient-to-r from-maroon-600 to-maroon-700 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl font-medium shadow-md hover:shadow-lg transition-all duration-300 group overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-maroon-500 to-maroon-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative">Learn More</span>
            </motion.button>
          </motion.div>

          {/* Right Content - Image Carousel */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl shadow-lg">
              {/* Image Carousel */}
              <div className="relative h-64 sm:h-80 md:h-96">
                {carouselImages.map((image, index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{
                      opacity: currentImageIndex === index ? 1 : 0,
                      scale: currentImageIndex === index ? 1 : 1.05,
                    }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                
                {/* Image Title Overlay */}
                <motion.div
                  key={currentImageIndex}
                  className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 shadow-md"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h4 className="text-slate-800 font-semibold text-sm sm:text-base">
                    {carouselImages[currentImageIndex].title}
                  </h4>
                </motion.div>
              </div>

              {/* Carousel Indicators */}
              <div className="absolute bottom-4 right-4 flex space-x-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      currentImageIndex === index 
                        ? 'bg-yellow-400 w-6 sm:w-8' 
                        : 'bg-white/70 hover:bg-white/90'
                    }`}
                  />
                ))}
              </div>

              {/* Rating Card - Moved to Top-Left with Overflow */}
              <motion.div
                className="absolute -top-4 sm:-top-6 -left-4 sm:-left-6 bg-white rounded-xl p-3 sm:p-4 shadow-lg border border-slate-100/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                style={{ zIndex: 10 }} // Ensure it stays above other elements
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800 text-sm sm:text-base">4.9/5</h3>
                    <p className="text-slate-600 text-xs sm:text-sm">Excellent</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid - Redesigned Cards without Hover */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white border-2 border-maroon-300 rounded-lg p-8 text-center transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Icon */}
              <motion.div
                className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-full flex items-center justify-center border-2 border-maroon-200"
              >
                <feature.icon className="w-8 h-8 text-maroon-600" />
              </motion.div>
              
              {/* Title */}
              <h3 className="text-lg font-bold text-slate-800 mb-1">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-base font-medium text-slate-700">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;