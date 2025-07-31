'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Heart, Shield, Users, ArrowRight, Star, MapPin, Clock, Award } from 'lucide-react';

export default function Home() {
  const stats = [
    { icon: Heart, value: "2,500+", label: "Animals Rescued" },
    { icon: Users, value: "1,200+", label: "Active Volunteers" },
    { icon: Shield, value: "98%", label: "Success Rate" },
    { icon: Award, value: "50+", label: "Partner NGOs" },
  ];

  const features = [
    {
      icon: MapPin,
      title: "Real-time Reporting",
      description: "Report animal emergencies with GPS location and instant alerts to rescue teams."
    },
    {
      icon: Heart,
      title: "AI-Powered Assistance",
      description: "Get instant guidance from Janu AI for animal care and emergency procedures."
    },
    {
      icon: Users,
      title: "Community Network",
      description: "Connect with volunteers, NGOs, and veterinarians in your local area."
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock emergency response and medical assistance for animals."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center paw-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2F3E46]/80 via-transparent to-[#2F3E46]/80"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-montserrat font-bold text-white leading-tight">
              Bridging{' '}
              <span className="text-[#D4AF37]">Humans</span>
              {' '}and{' '}
              <span className="text-[#00BFA6]">Animals</span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
            >
              For a Better Tomorrow
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-white/80 max-w-2xl mx-auto"
            >
              AI-assisted platform connecting communities with veterinarians and rescue teams for immediate animal care and protection.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link href="/report" className="btn-primary flex items-center space-x-2">
                <Heart className="h-5 w-5" />
                <span>Report Emergency</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              
              <Link href="/dashboard" className="btn-secondary flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Join as Volunteer</span>
              </Link>
              
              <Link href="/about" className="btn-accent flex items-center space-x-2">
                <Shield className="h-5 w-5" />
                <span>Learn More</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Hearts Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-[#D4AF37]/20"
              initial={{ 
                x: Math.random() * 100, 
                y: 100,
                scale: 0 
              }}
              animate={{ 
                y: -50, 
                scale: [0, 1, 0],
                rotate: 360 
              }}
              transition={{ 
                duration: 8 + Math.random() * 4, 
                repeat: Infinity,
                delay: i * 2 
              }}
            >
              <Heart className="h-8 w-8" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-4">
              Making a Real Impact
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Together, we're creating a safer world for animals through community action and technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 text-center group hover:scale-105 transition-transform duration-300"
              >
                <stat.icon className="h-12 w-12 text-[#D4AF37] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-3xl font-montserrat font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-4">
              How JanMitra Works
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Our AI-powered platform streamlines animal rescue operations with cutting-edge technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 group hover:scale-105 transition-transform duration-300"
              >
                <feature.icon className="h-12 w-12 text-[#00BFA6] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-montserrat font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-12"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of compassionate individuals who are helping create a safer world for animals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/login" className="btn-primary flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Get Started Today</span>
              </Link>
              <Link href="/about" className="btn-secondary flex items-center space-x-2">
                <Star className="h-5 w-5" />
                <span>Learn Our Mission</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}