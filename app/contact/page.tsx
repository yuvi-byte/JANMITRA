'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageCircle, 
  Send,
  Star,
  Heart,
  MessageSquare,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Youtube,
  Clock,
  Users,
  Award
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'hello@janmitra.org',
      description: 'Get in touch with our support team'
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+91 98765 43210',
      description: '24/7 emergency hotline available'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: 'Mumbai, Maharashtra, India',
      description: 'Main office and rescue center'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      value: '24/7 Emergency',
      description: 'Always available for animal emergencies'
    }
  ];

  const socialLinks = [
    { name: 'WhatsApp', icon: MessageSquare, url: 'https://wa.me/919876543210', color: 'bg-green-500' },
    { name: 'Telegram', icon: MessageCircle, url: 'https://t.me/janmitra', color: 'bg-blue-500' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com/janmitra', color: 'bg-pink-500' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/janmitra', color: 'bg-blue-400' },
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com/janmitra', color: 'bg-blue-600' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/company/janmitra', color: 'bg-blue-700' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com/janmitra', color: 'bg-red-500' }
  ];

  const teamMembers = [
    {
      name: 'Dr. Priya Sharma',
      role: 'Founder & CEO',
      image: '/api/placeholder/100/100',
      description: 'Veterinarian with 15+ years of experience in animal welfare'
    },
    {
      name: 'Raj Mehta',
      role: 'Head of Operations',
      image: '/api/placeholder/100/100',
      description: 'Leading rescue operations and volunteer coordination'
    },
    {
      name: 'Amit Patel',
      role: 'Technology Lead',
      image: '/api/placeholder/100/100',
      description: 'Managing AI systems and platform development'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact form submitted:', formData);
  };

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle feedback submission
    console.log('Feedback submitted:', { rating, feedback });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 paw-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold text-white mb-6">
              Get in <span className="text-[#D4AF37]">Touch</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              We'd love to hear from you. Whether you have a question, feedback, or want to join our mission, 
              we're here to help and connect with you.
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300"
              >
                <info.icon className="h-12 w-12 text-[#D4AF37] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-montserrat font-semibold text-white mb-2">
                  {info.title}
                </h3>
                <div className="text-[#00BFA6] font-semibold mb-2">
                  {info.value}
                </div>
                <p className="text-white/80 text-sm">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-montserrat font-bold text-white mb-4">
                  Send us a Message
                </h2>
                <p className="text-white/80">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#D4AF37]"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#D4AF37]"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#D4AF37]"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#D4AF37]"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary flex items-center space-x-2 w-full justify-center"
                >
                  <Send className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </motion.div>

            {/* Map & Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Map */}
              <div className="glass-card p-6">
                <h3 className="text-xl font-montserrat font-semibold text-white mb-4">
                  Our Location
                </h3>
                <div className="bg-white/10 rounded-lg h-64 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-[#D4AF37] mx-auto mb-4" />
                    <p className="text-white/80">Interactive Map Coming Soon</p>
                    <p className="text-white/60 text-sm mt-2">
                      Mumbai, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="glass-card p-6">
                <h3 className="text-xl font-montserrat font-semibold text-white mb-4">
                  Connect With Us
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${social.color} hover:scale-105 transition-transform duration-300 p-3 rounded-lg flex items-center justify-center group`}
                    >
                      <social.icon className="h-6 w-6 text-white" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              The passionate individuals behind JanMitra's mission to protect and care for animals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-[#00BFA6] font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-white/80 text-sm">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-montserrat font-bold text-white mb-4">
                Share Your Feedback
              </h2>
              <p className="text-white/80">
                Help us improve by sharing your experience with JanMitra
              </p>
            </div>

            <form onSubmit={handleFeedbackSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Rate your experience
                </label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className={`p-2 rounded-lg transition-colors ${
                        star <= rating
                          ? 'text-[#D4AF37] bg-[#D4AF37]/20'
                          : 'text-white/40 hover:text-white/60'
                      }`}
                    >
                      <Star className="h-6 w-6 fill-current" />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Your feedback
                </label>
                <textarea
                  rows={4}
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#D4AF37]"
                  placeholder="Tell us about your experience with JanMitra..."
                />
              </div>

              <button
                type="submit"
                className="btn-accent flex items-center space-x-2 w-full justify-center"
              >
                <Heart className="h-5 w-5" />
                <span>Submit Feedback</span>
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 