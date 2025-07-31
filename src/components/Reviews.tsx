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
    <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-slate-800 mb-2 md:mb-3">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-maroon-700 to-red-800">Guests Say</span>
          </h2>
          <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto">
            Read authentic reviews from our valued guests who experienced our premium hospitality.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 md:p-6 bg-white rounded-xl shadow-md border border-slate-100 hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
                <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-maroon-700" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-1">{stat.value}</h3>
              <p className="text-xs md:text-sm text-slate-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              className="bg-white rounded-xl shadow-md p-4 md:p-6 border border-slate-100 hover:shadow-lg transition-all"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-3">
                <Quote className="w-6 h-6 md:w-8 md:h-8 text-maroon-700/20" />
                <div className="flex space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 md:w-4 md:h-4 text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <p className="text-xs md:text-sm text-slate-700 mb-4 leading-relaxed">
                "{review.review}"
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center space-x-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h4 className="text-sm md:text-base font-semibold text-slate-800">{review.name}</h4>
                  <div className="flex items-center space-x-2 text-xs text-slate-500">
                    <MapPin className="w-3 h-3" />
                    <span>{review.country}</span>
                    <Calendar className="w-3 h-3 ml-2" />
                    <span>{review.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-8 md:mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-gradient-to-r from-maroon-700 to-red-800 text-white px-6 md:px-8 py-3 rounded-xl font-semibold hover:from-maroon-800 hover:to-red-900 transition-all shadow-lg text-sm md:text-base"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Share Your Experience
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;