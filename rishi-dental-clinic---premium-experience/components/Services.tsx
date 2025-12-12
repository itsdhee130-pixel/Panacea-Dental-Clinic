import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Scan, Sparkles, Heart, ArrowRight, X, Check, Calendar } from 'lucide-react';
import AnimatedButton from './AnimatedButton';

interface ServicesProps {
    onBookAppointment?: () => void;
}

const services = [
  {
    id: 'root-canal',
    title: 'Painless RCT',
    description: 'Advanced Root Canal Treatment with rotary instruments for 100% precision.',
    longDescription: 'Our Root Canal Treatment is designed to be completely painless. We use advanced rotary endodontics and apex locators to ensure the infection is removed completely. Most procedures are completed in a single sitting.',
    icon: <Zap size={32} />,
    color: 'from-blue-500 to-cyan-400',
    features: ['Single Sitting Option', 'Painless Procedure', 'Digital X-Ray Guided', 'Post-Treatment Care']
  },
  {
    id: 'implants',
    title: 'Dental Implants',
    description: 'Permanent fixed solution for missing teeth using high-grade titanium.',
    longDescription: 'Restore your smile and chewing ability with our premium dental implants. We use biocompatible titanium implants that fuse naturally with your jawbone, acting just like a natural tooth root.',
    icon: <Scan size={32} />,
    color: 'from-purple-500 to-indigo-500',
    features: ['Lifetime Durability', 'Natural Look & Feel', 'Minimally Invasive', 'Prevents Bone Loss']
  },
  {
    id: 'ortho',
    title: 'Braces & Aligners',
    description: 'Straighten your teeth with Metal/Ceramic Braces or Invisible Aligners.',
    longDescription: 'Whether you are a child or an adult, we offer orthodontic solutions to straighten your teeth. Choose from traditional braces or go for our Invisible Aligners for a discreet treatment experience.',
    icon: <Sparkles size={32} />,
    color: 'from-pink-500 to-rose-400',
    features: ['Invisible Aligners', 'Ceramic Braces', 'Correction of Jaw Alignment', 'Customized Plans']
  },
  {
    id: 'pediatric',
    title: 'Pediatric Dentistry',
    description: 'Specialized and gentle dental care designed specifically for children.',
    longDescription: 'We make dental visits fun for kids! Our pediatric treatments focus on preventive care, fluoride applications, and habit breaking appliances in a friendly, fear-free environment.',
    icon: <Heart size={32} />,
    color: 'from-emerald-500 to-teal-400',
    features: ['Fear-Free Environment', 'Cavity Prevention', 'Fluoride Treatment', 'Habit Breaking']
  }
];

const Services: React.FC<ServicesProps> = ({ onBookAppointment }) => {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="services">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-medical-light font-bold tracking-wider uppercase text-sm"
          >
            Comprehensive Care
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-4xl md:text-5xl font-display font-bold text-medical-dark"
          >
            Our Treatments
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-gray-500 text-lg"
          >
            From cosmetic makeovers to routine hygiene, we provide complete dental solutions in Gomti Nagar.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              layoutId={`service-card-${service.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedService(service)}
              className="group relative bg-[#F8FAFB] rounded-2xl p-8 border border-gray-100 hover:border-transparent transition-colors duration-300 cursor-pointer"
            >
              <div className="absolute inset-0 bg-white rounded-2xl shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 shadow-lg transform group-hover:rotate-12 transition-transform duration-500`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-title font-bold text-medical-dark mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-medical-dark group-hover:to-medical-light transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-500 mb-6 leading-relaxed text-sm">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-medical-dark font-semibold text-sm opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedService(null)}
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                />
                
                <motion.div 
                    layoutId={`service-card-${selectedService.id}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
                >
                    {/* Modal Header */}
                    <div className={`h-32 bg-gradient-to-r ${selectedService.color} relative flex items-center px-8`}>
                         <button 
                            onClick={() => setSelectedService(null)}
                            className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full text-white transition-colors"
                        >
                            <X size={20} />
                        </button>
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white shadow-inner border border-white/30">
                            {selectedService.icon}
                        </div>
                        <div className="ml-6 text-white">
                            <h3 className="text-3xl font-display font-bold">{selectedService.title}</h3>
                            <p className="text-white/80">Panacea Dental Clinic</p>
                        </div>
                    </div>

                    {/* Modal Content */}
                    <div className="p-8">
                        <div className="prose prose-lg text-gray-600 mb-8">
                            <p className="text-lg leading-relaxed">{selectedService.longDescription}</p>
                        </div>

                        <div className="mb-8">
                            <h4 className="font-bold text-medical-dark mb-4 text-sm uppercase tracking-wider">Key Benefits</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {selectedService.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                            <Check size={14} strokeWidth={3} />
                                        </div>
                                        <span className="font-medium text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4 border-t border-gray-100">
                             <AnimatedButton 
                                variant="primary" 
                                className="flex-1 justify-center" 
                                icon={<Calendar size={18} />}
                                onClick={() => {
                                    setSelectedService(null);
                                    if(onBookAppointment) onBookAppointment();
                                }}
                             >
                                Book Appointment
                             </AnimatedButton>
                             <button 
                                onClick={() => setSelectedService(null)}
                                className="px-6 py-4 rounded-full font-bold text-gray-500 hover:bg-gray-100 transition-colors"
                             >
                                Close
                             </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
