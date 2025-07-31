'use client';

import { motion } from 'framer-motion';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="glass-card mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-[#D4AF37]" />
              <span className="text-xl font-montserrat font-bold text-[#D4AF37]">
                JanMitra
              </span>
            </div>
            <p className="text-white/80">
              Bridging humans and animals for a better tomorrow through community care and AI assistance.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-white/60 hover:text-[#D4AF37] cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-white/60 hover:text-[#D4AF37] cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-white/60 hover:text-[#D4AF37] cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-white/60 hover:text-[#D4AF37] cursor-pointer transition-colors" />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-montserrat font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              {['About Us', 'Report Animal', 'Volunteer', 'Donate', 'Contact'].map((link) => (
                <Link
                  key={link}
                  href={`/${link.toLowerCase().replace(' ', '-')}`}
                  className="block text-white/80 hover:text-[#D4AF37] transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-montserrat font-semibold text-white">Services</h3>
            <div className="space-y-2">
              {['Emergency Rescue', 'Medical Care', 'Adoption', 'Rehabilitation', 'AI Assistant'].map((service) => (
                <div key={service} className="text-white/80">
                  {service}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact & Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-montserrat font-semibold text-white">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-white/80">
                <Phone className="h-4 w-4" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Mail className="h-4 w-4" />
                <span>help@janmitra.org</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <MapPin className="h-4 w-4" />
                <span>Mumbai, India</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="mt-6">
              <h4 className="font-semibold text-white mb-2">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-l-lg text-white placeholder-white/50 focus:outline-none focus:border-[#D4AF37]"
                />
                <button className="bg-[#D4AF37] hover:bg-[#B8941F] px-4 py-2 rounded-r-lg transition-colors">
                  <Mail className="h-4 w-4 text-[#2F3E46]" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 JanMitra. All rights reserved. Made with ❤️ for animals.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;