import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, MapPin, Calendar } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      name: 'Sarah Johnson',
      country: 'United States',
      rating: 5,
      date: 'December 2024',
      review: 'Absolutely exceptional experience! The staff was incredibly welcoming and the rooms were luxurious. The location in Thamel is perfect for exploring Kathmandu.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'James Mitchell',
      country: 'United Kingdom', 
      rating: 5,
      date: 'November 2024',
      review: 'Outstanding service and beautiful facilities. The restaurant serves amazing local cuisine. Will definitely return on my next visit to Nepal.',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Priya Sharma',
      country: 'India',
      rating: 5,
      date: 'October 2024',
      review: 'Perfect blend of traditional Nepalese hospitality and modern comfort. The event hall for our conference was well-equipped and the team was very professional.',
      avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'David Chen',
      country: 'Australia',
      rating: 5,
      date: 'September 2024',
      review: 'Exceeded all expectations! The attention to detail and personalized service made our honeymoon unforgettable. Highly recommend to anyone visiting Kathmandu.',
      avatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Maria Rodriguez',
      country: 'Spain',
      rating: 5,
      date: 'August 2024',
      review: 'Fantastic location and superb amenities. The spa services were incredibly relaxing after long days of sightseeing. Staff goes above and beyond.',
      avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Robert Kim',
      country: 'South Korea',
      rating: 5,
      date: 'July 2024',
      review: 'Business traveler here - excellent conference facilities and reliable wifi. The business center and meeting rooms are top-notch. Great for corporate stays.',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const stats = [
    { value: '4.9', label: 'Overall Rating', icon: Star },
    { value: '2,500+', label: 'Happy Guests', icon: Quote },
    { value: '98%', label: 'Satisfaction Rate', icon: Star },
  ];

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 via-white/90 to-slate-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-serif font-extrabold text-slate-800 mb-3 sm:mb-5 leading-snug tracking-wide"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-maroon-700 via-maroon-800 to-red-800  mt-2">Guests Say</span>
          </motion.h2>
          {/* <motion.p 
            className="text-sm sm:text-base md:text-lg text-slate-600 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
          >
            Read authentic reviews from our valued guests who experienced our premium hospitality.
          </motion.p> */}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-7 mb-10 md:mb-14 bg-white/80 rounded-2xl p-4 sm:p-6 "
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 sm:p-5 rounded-xl bg-gradient-to-br from-white to-yellow-50/30 border border-yellow-100/50 shadow-md"
              initial={{ opacity: 0, y: 20, rotate: -1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
              style={{ transformOrigin: 'center' }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-maroon-700" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-1">{stat.value}</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              className="bg-white rounded-2xl p-4 sm:p-5 shadow-md border border-slate-200/50 bg-[linear-gradient(135deg,_rgba(255,255,255,0.9)_0%,_rgba(245,245,245,0.7)_100%)] overflow-hidden relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true }}
            >
              {/* Quote and Rating */}
              <div className="flex justify-between items-start mb-3 sm:mb-4">
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-maroon-700/30 rotate-6" />
                <div className="flex space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <p className="text-xs sm:text-sm text-slate-700 mb-4 sm:mb-5 leading-relaxed line-clamp-4 group-hover:line-clamp-none transition-all duration-400">
                "{review.review}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center space-x-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-yellow-100"
                />
                <div className="flex-1">
                  <h4 className="text-sm sm:text-base font-semibold text-slate-800">{review.name}</h4>
                  <div className="flex items-center space-x-2 text-xs sm:text-sm text-slate-500">
                    <MapPin className="w-3 h-3" />
                    <span>{review.country}</span>
                    <Calendar className="w-3 h-3 ml-2" />
                    <span>{review.date}</span>
                  </div>
                </div>
              </div>

              {/* Subtle Overlay for Depth */}
              <div className="absolute inset-0 bg-gradient-to-tr from-maroon-700/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
        >
          <motion.button
            className="relative bg-gradient-to-r from-maroon-700 to-red-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold shadow-md hover:shadow-xl transition-all duration-400 group overflow-hidden text-sm sm:text-base"
            whileHover={{ scale: 1.06, y: -4, boxShadow: '0 10px 20px rgba(120, 0, 0, 0.3)' }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-maroon-600 to-maroon-700 opacity-0 group-hover:opacity-80 transition-opacity duration-400"></div>
            <span className="relative z-10">Share Your Experience</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;