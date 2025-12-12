import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-medical-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-medical-dark font-bold text-xl">
                P
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">
                Panacea<span className="text-medical-light">Dental</span>
              </span>
            </div>
            <p className="text-white/60 leading-relaxed text-sm">
              Located in the heart of Gomti Nagar, Panacea Dental Clinic offers advanced, painless, and affordable dental care using the latest technology.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-medical-light hover:text-medical-dark transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-4 text-white/60">
              {['Dental Implants', 'Root Canal Treatment', 'Smile Design', 'Orthodontics (Braces)', 'Pediatric Dentistry'].map(item => (
                <li key={item}><a href="#" className="hover:text-medical-light transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Clinic Timings</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex gap-3 items-start">
                <Clock className="text-medical-light shrink-0" size={20} />
                <span>
                  <strong className="block text-white">Mon - Sat:</strong>
                  10:00 AM - 8:00 PM
                </span>
              </li>
              <li className="pl-8 text-white/40 text-sm">
                Sunday: By Appointment
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Visit Us</h4>
            <ul className="space-y-4 text-white/60">
              <li className="flex gap-3 items-start">
                <MapPin className="text-medical-light shrink-0" size={20} />
                <span>Opposite Kalyan Jewellers,<br/>Gomti Nagar, Lucknow,<br/>Uttar Pradesh 226010</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="text-medical-light shrink-0" size={20} />
                <span>+91 987 654 3210</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="text-medical-light shrink-0" size={20} />
                <span>contact@panaceadental.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>&copy; 2024 Panacea Dental Clinic. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
