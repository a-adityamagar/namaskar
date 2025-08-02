import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Clock, Star, Utensils } from 'lucide-react';

const Restaurant = () => {
  const menuItems = [
    {
      category: 'Nepali Cuisine',
      items: [
        { name: 'Dal Bhat Set', price: 'NPR 550', description: 'Traditional meal with dal, rice, vegetables' },
        { name: 'Himalayan Momos', price: 'NPR 350', description: 'Steamed dumplings with spices' }
      ]
    },
    {
      category: 'International',
      items: [
        { name: 'Continental Breakfast', price: 'NPR 650', description: 'Fresh pastries, fruits, coffee' },
        { name: 'Grilled Salmon', price: 'NPR 1,200', description: 'Fresh salmon with herbs' }
      ]
    }
  ];

  const stats = [
    { icon: ChefHat, value: '3', label: 'Expert Chefs' },
    { icon: Star, value: '4.8', label: 'Food Rating' },
    { icon: Utensils, value: '150+', label: 'Menu Items' },
    { icon: Clock, value: '24/7', label: 'Room Service' }
  ];

  return (
    <section id="restaurant" className="py-16 bg-gradient-to-br from-slate-50 to-white">
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
            Culinary <span className="text-transparent bg-clip-text bg-gradient-to-r from-maroon-600 to-maroon-700">Excellence</span>
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Authentic Nepali cuisine and international delicacies prepared by our expert chefs.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-16">
          {/* Restaurant Images */}
          <motion.div
            className="flex flex-col h-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-3 h-full">
              <motion.div
                className="rounded-lg overflow-hidden shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
                  alt="Restaurant Interior"
                  className="w-full h-36 object-cover"
                />
              </motion.div>
              <motion.div
                className="rounded-lg overflow-hidden shadow-md"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.pexels.com/photos/1410236/pexels-photo-1410236.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop"
                  alt="Fine Dining"
                  className="w-full h-36 object-cover"
                />
              </motion.div>
              <motion.div
                className="col-span-2 rounded-lg overflow-hidden shadow-lg flex-1"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=600&h=250&fit=crop"
                  alt="Chef Preparing Food"
                  className="w-full h-full min-h-48 object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Restaurant Details */}
          <motion.div
            className="flex flex-col h-full justify-between"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex-1">
              <h3 className="text-2xl font-serif font-bold text-slate-800 mb-6">
                Gastronomic Journey
              </h3>
              <p className="text-base text-slate-600 mb-8 leading-relaxed">
                Experience authentic Nepali flavors and international cuisine. Each dish is crafted 
                using locally sourced ingredients and traditional recipes.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 bg-white rounded-lg shadow-sm"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <stat.icon className="w-7 h-7 mx-auto mb-3 text-maroon-600" />
                  <h4 className="text-xl font-bold text-slate-800">{stat.value}</h4>
                  <p className="text-slate-600 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Menu Preview */}
        <motion.div
          className="bg-white   p-6 md:p-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-serif font-bold text-slate-800 mb-2">
              Featured Menu
            </h3>
            <p className="text-slate-600 text-base">A taste of our culinary offerings</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {menuItems.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-semibold text-maroon-600 mb-3 border-b border-maroon-200 pb-2">
                  {category.category}
                </h4>
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      className="group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + itemIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <h5 className="font-medium text-slate-800 group-hover:text-maroon-600 transition-colors text-base">
                          {item.name}
                        </h5>
                        <span className="font-bold text-yellow-600 text-base">{item.price}</span>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:from-yellow-600 hover:to-yellow-700 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Full Menu
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Restaurant;