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
    <section id="about" className="py-16 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Experience Luxury at
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-maroon-600 to-maroon-700 block">
                Namaskar Regency
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-base text-slate-600 mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Located in the heart of Kathmandu, Namaskar Regency offers the perfect blend of traditional 
              Nepalese hospitality and modern comfort. Our commitment to excellence ensures every guest 
              experiences exceptional service.
            </motion.p>

            <motion.button
              className="bg-gradient-to-r from-maroon-600 to-maroon-700 text-white px-6 py-3 rounded-lg font-medium hover:from-maroon-700 hover:to-maroon-800 transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Right Content - Image Carousel */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              {/* Image Carousel */}
              <div className="relative h-80 overflow-hidden">
                {carouselImages.map((image, index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{
                      opacity: currentImageIndex === index ? 1 : 0,
                      scale: currentImageIndex === index ? 1 : 1.1,
                    }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                
                {/* Image Title Overlay */}
                <motion.div
                  key={currentImageIndex}
                  className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h4 className="text-slate-800 font-semibold text-sm">
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
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentImageIndex === index 
                        ? 'bg-yellow-400 w-6' 
                        : 'bg-white/60 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Rating Card */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg border border-slate-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800">4.9/5</h3>
                  <p className="text-slate-600 text-sm">Excellent</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="text-center p-5 rounded-xl bg-white shadow-md border border-slate-100 hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center mx-auto mb-3">
                <feature.icon className="w-6 h-6 text-maroon-600" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;