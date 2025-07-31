'use client';

import { motion } from 'framer-motion';
import { Heart, Target, Eye, Users, Award, MapPin, Calendar, Star } from 'lucide-react';

export default function About() {
  const missions = [
    {
      icon: Heart,
      title: "Rescue & Rehabilitation",
      description: "Immediate response to animal emergencies with professional medical care and rehabilitation services."
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Creating a network of volunteers, NGOs, and veterinarians working together for animal welfare."
    },
    {
      icon: Target,
      title: "Technology Integration",
      description: "Leveraging AI and modern technology to streamline rescue operations and improve outcomes."
    }
  ];

  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      role: "Veterinarian",
      content: "JanMitra has revolutionized how we handle animal emergencies. The AI assistance and community network make all the difference.",
      rating: 5
    },
    {
      name: "Raj Mehta",
      role: "Volunteer",
      content: "Being part of JanMitra has been incredibly rewarding. The platform makes it easy to help animals in need.",
      rating: 5
    },
    {
      name: "Animal Welfare NGO",
      role: "Partner Organization",
      content: "The coordination through JanMitra has improved our rescue efficiency by 300%. Truly game-changing platform.",
      rating: 5
    }
  ];

  const timeline = [
    { year: "2023", event: "JanMitra Founded", description: "Started with a vision to bridge technology and animal welfare" },
    { year: "2023", event: "AI Assistant Launch", description: "Introduced Janu AI for instant animal care guidance" },
    { year: "2024", event: "1000+ Rescues", description: "Reached milestone of 1000 successful animal rescues" },
    { year: "2024", event: "National Expansion", description: "Extended services to 15 major cities across India" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 paw-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-6">
              About <span className="text-[#D4AF37]">JanMitra</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              We are a passionate team of animal lovers, technologists, and veterinarians dedicated to creating a world where no animal suffers alone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="glass-card p-8">
                <Target className="h-12 w-12 text-[#D4AF37] mb-4" />
                <h2 className="text-2xl font-montserrat font-bold text-white mb-4">Our Mission</h2>
                <p className="text-white/80 leading-relaxed">
                  To create an AI-powered ecosystem that connects communities, veterinarians, and rescue organizations to provide immediate, effective care for animals in need. We believe technology can amplify compassion and create lasting change.
                </p>
              </div>

              <div className="glass-card p-8">
                <Eye className="h-12 w-12 text-[#00BFA6] mb-4" />
                <h2 className="text-2xl font-montserrat font-bold text-white mb-4">Our Vision</h2>
                <p className="text-white/80 leading-relaxed">
                  A world where every animal receives immediate help when in distress, supported by a compassionate community and powered by intelligent technology that ensures no animal is forgotten or left behind.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {missions.map((mission, index) => (
                <div key={mission.title} className="glass-card p-6 group hover:scale-105 transition-transform duration-300">
                  <mission.icon className="h-8 w-8 text-[#4682B4] mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-lg font-montserrat font-semibold text-white mb-2">
                    {mission.title}
                  </h3>
                  <p className="text-white/80 text-sm">
                    {mission.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-white/80">
              Milestones in our mission to revolutionize animal welfare
            </p>
          </motion.div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}
              >
                <div className="flex-1">
                  <div className="glass-card p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <Calendar className="h-5 w-5 text-[#D4AF37]" />
                      <span className="text-[#D4AF37] font-semibold">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-montserrat font-semibold text-white mb-2">
                      {item.event}
                    </h3>
                    <p className="text-white/80">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-[#D4AF37] rounded-full flex-shrink-0"></div>
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-4">
              What People Say
            </h2>
            <p className="text-lg text-white/80">
              Hear from our community of volunteers, veterinarians, and partners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 group hover:scale-105 transition-transform duration-300"
              >
                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-[#D4AF37] fill-current" />
                  ))}
                </div>
                <p className="text-white/80 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-white/60">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-12"
          >
            <Heart className="h-16 w-16 text-[#D4AF37] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6">
              Join Our Mission
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Be part of a community that's making a real difference in the lives of animals. Every action counts, every volunteer matters.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/login" className="btn-primary flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>Become a Volunteer</span>
              </a>
              <a href="/report" className="btn-accent flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Report an Emergency</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}