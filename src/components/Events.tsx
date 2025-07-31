import React from 'react';
import { motion } from 'framer-motion';
import { Users, Calendar, Music, Camera } from 'lucide-react';

const Events = () => {
  const eventTypes = [
    {
      icon: Users,
      title: 'Corporate Events',
      description: 'Professional conference halls with modern AV equipment',
      capacity: 'Up to 200 guests',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      icon: Calendar,
      title: 'Weddings',
      description: 'Elegant banquet halls for your special day',
      capacity: 'Up to 300 guests',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    },
    {
      icon: Music,
      title: 'Social Events',
      description: 'Versatile spaces for celebrations',
      capacity: 'Up to 150 guests',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop'
    }
  ];

  const facilities = [
    { icon: Calendar, text: 'Event Planning' },
    { icon: Music, text: 'Sound System' },
    { icon: Camera, text: 'Photography' },
    { icon: Users, text: 'Event Manager' }
  ];

  return (
    <section id="events" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mb-3">
            Memorable <span className="text-transparent bg-clip-text bg-gradient-to-r from-maroon-600 to-maroon-700">Events</span>
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Host your special occasions in our elegant event spaces with exceptional service.
          </p>
        </motion.div>

        {/* Event Types */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          {eventTypes.map((event, index) => (
            <motion.div
              key={event.title}
              className="group bg-white rounded-xl shadow-md overflow-hidden border border-slate-100 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-36 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-3 left-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <event.icon className="w-5 h-5 text-maroon-600" />
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">{event.title}</h3>
                <p className="text-slate-600 mb-3 leading-relaxed text-sm">{event.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-yellow-600 font-medium text-sm">{event.capacity}</span>
                  <motion.button
                    className="text-slate-700 hover:text-maroon-600 font-medium transition-colors text-sm"
                    whileHover={{ x: 5 }}
                  >
                    Learn More →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-maroon-50 to-yellow-50 rounded-2xl p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-serif font-bold text-slate-800 mb-4">
            Plan Your Perfect Event
          </h3>
          <p className="text-base text-slate-600 mb-6 max-w-2xl mx-auto">
            Our experienced team will help you create an unforgettable event with attention to every detail.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              className="bg-gradient-to-r from-maroon-600 to-maroon-700 text-white px-6 py-3 rounded-lg font-medium hover:from-maroon-700 hover:to-maroon-800 transition-all flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-4 h-4" />
              <span>Book Event</span>
            </motion.button>
            <motion.button
              className="border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-medium hover:border-maroon-500 hover:text-maroon-600 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Request Quote
            </motion.button>
          </div>
        </motion.div>

        {/* Facilities */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-serif font-bold text-slate-800 text-center mb-8">
            Complete Event Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.text}
                className="flex items-center space-x-3 p-4 bg-gradient-to-r from-slate-50 to-slate-100 rounded-lg hover:from-yellow-50 hover:to-yellow-100 transition-all"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <facility.icon className="w-5 h-5 text-maroon-600" />
                </div>
                <span className="font-medium text-slate-800 text-sm">{facility.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;