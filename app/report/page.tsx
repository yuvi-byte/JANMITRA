'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Camera, Phone, AlertTriangle, Heart, Upload, Send } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ReportAnimal() {
  const [formData, setFormData] = useState({
    animalType: '',
    condition: '',
    location: '',
    description: '',
    contactName: '',
    contactPhone: '',
    urgency: 'medium'
  });

  const animalTypes = [
    'Dog', 'Cat', 'Cow', 'Bird', 'Monkey', 'Horse', 'Goat', 'Other'
  ];

  const conditions = [
    'Injured', 'Sick', 'Abandoned', 'Trapped', 'Aggressive', 'Pregnant', 'Malnourished', 'Other'
  ];

  const urgencyLevels = [
    { value: 'low', label: 'Low Priority', color: 'text-green-400' },
    { value: 'medium', label: 'Medium Priority', color: 'text-yellow-400' },
    { value: 'high', label: 'High Priority', color: 'text-orange-400' },
    { value: 'critical', label: 'Critical Emergency', color: 'text-red-400' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.animalType || !formData.condition || !formData.location) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Simulate form submission
    toast.success('Report submitted successfully! Our team will respond soon.');
    
    // Reset form
    setFormData({
      animalType: '',
      condition: '',
      location: '',
      description: '',
      contactName: '',
      contactPhone: '',
      urgency: 'medium'
    });
  };

  const getLocationFromGPS = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setFormData(prev => ({
            ...prev,
            location: `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`
          }));
          toast.success('Location added successfully');
        },
        () => {
          toast.error('Unable to get location. Please enter manually.');
        }
      );
    } else {
      toast.error('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-12 paw-pattern">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <AlertTriangle className="h-16 w-16 text-[#D4AF37] mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-4">
              Report an Animal in Need
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Help us save lives by reporting animals that need immediate care or rescue. Every report makes a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Emergency Notice */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 border-l-4 border-red-400"
          >
            <div className="flex items-center space-x-3">
              <Phone className="h-6 w-6 text-red-400" />
              <div>
                <h3 className="font-semibold text-white">Emergency Hotline</h3>
                <p className="text-white/80">For critical emergencies, call: <span className="text-[#D4AF37] font-semibold">+91 9876543210</span></p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Report Form */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Animal Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-montserrat font-semibold text-white flex items-center space-x-2">
                  <Heart className="h-6 w-6 text-[#D4AF37]" />
                  <span>Animal Information</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">
                      Animal Type *
                    </label>
                    <select
                      value={formData.animalType}
                      onChange={(e) => setFormData(prev => ({ ...prev, animalType: e.target.value }))}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                      required
                    >
                      <option value="">Select animal type</option>
                      {animalTypes.map(type => (
                        <option key={type} value={type} className="bg-[#2F3E46] text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">
                      Condition *
                    </label>
                    <select
                      value={formData.condition}
                      onChange={(e) => setFormData(prev => ({ ...prev, condition: e.target.value }))}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                      required
                    >
                      <option value="">Select condition</option>
                      {conditions.map(condition => (
                        <option key={condition} value={condition} className="bg-[#2F3E46] text-white">
                          {condition}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">
                    Urgency Level
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {urgencyLevels.map(level => (
                      <label key={level.value} className="cursor-pointer">
                        <input
                          type="radio"
                          name="urgency"
                          value={level.value}
                          checked={formData.urgency === level.value}
                          onChange={(e) => setFormData(prev => ({ ...prev, urgency: e.target.value }))}
                          className="sr-only"
                        />
                        <div className={`p-3 rounded-lg border-2 transition-all ${
                          formData.urgency === level.value 
                            ? 'border-[#D4AF37] bg-[#D4AF37]/20' 
                            : 'border-white/20 bg-white/5 hover:border-white/40'
                        }`}>
                          <div className={`text-sm font-medium ${level.color}`}>
                            {level.label}
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Location Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-montserrat font-semibold text-white flex items-center space-x-2">
                  <MapPin className="h-6 w-6 text-[#00BFA6]" />
                  <span>Location Information</span>
                </h2>

                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">
                    Location *
                  </label>
                  <div className="flex space-x-3">
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                      placeholder="Enter address or coordinates"
                      className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                      required
                    />
                    <button
                      type="button"
                      onClick={getLocationFromGPS}
                      className="btn-accent flex items-center space-x-2 whitespace-nowrap"
                    >
                      <MapPin className="h-4 w-4" />
                      <span>Use GPS</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-montserrat font-semibold text-white flex items-center space-x-2">
                  <Camera className="h-6 w-6 text-[#4682B4]" />
                  <span>Additional Information</span>
                </h2>

                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">
                    Description
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Provide additional details about the animal's situation..."
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/90 mb-2">
                    Upload Photos
                  </label>
                  <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:border-[#D4AF37] transition-colors cursor-pointer">
                    <Upload className="h-12 w-12 text-white/40 mx-auto mb-4" />
                    <p className="text-white/60">
                      Click to upload photos or drag and drop
                    </p>
                    <p className="text-sm text-white/40 mt-2">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-montserrat font-semibold text-white flex items-center space-x-2">
                  <Phone className="h-6 w-6 text-[#D4AF37]" />
                  <span>Contact Information</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formData.contactName}
                      onChange={(e) => setFormData(prev => ({ ...prev, contactName: e.target.value }))}
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/90 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.contactPhone}
                      onChange={(e) => setFormData(prev => ({ ...prev, contactPhone: e.target.value }))}
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-6">
                <button
                  type="submit"
                  className="btn-primary flex items-center space-x-2 text-lg px-8 py-4"
                >
                  <Send className="h-5 w-5" />
                  <span>Submit Report</span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-2xl font-montserrat font-semibold text-white mb-8">
              What Happens Next?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="glass-card p-6 text-center">
                <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-[#2F3E46] font-bold">1</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Immediate Alert</h3>
                <p className="text-white/80 text-sm">Our AI system notifies the nearest rescue team instantly</p>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="w-12 h-12 bg-[#00BFA6] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Team Dispatch</h3>
                <p className="text-white/80 text-sm">Qualified volunteers and vets are assigned to the case</p>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="w-12 h-12 bg-[#4682B4] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="font-semibold text-white mb-2">Follow-up</h3>
                <p className="text-white/80 text-sm">You receive updates on the animal's rescue and recovery</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}