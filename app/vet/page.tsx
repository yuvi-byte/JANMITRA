'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Wifi, 
  WifiOff, 
  MapPin, 
  Star, 
  Clock, 
  Phone, 
  MessageCircle, 
  Calendar,
  Filter,
  Search,
  Heart,
  Award,
  Users,
  CheckCircle,
  AlertCircle,
  Clock as ClockIcon
} from 'lucide-react';

export default function VetNetwork() {
  const [isOnline, setIsOnline] = useState(true);
  const [selectedSpecialization, setSelectedSpecialization] = useState('all');
  const [distanceFilter, setDistanceFilter] = useState(10);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [selectedVet, setSelectedVet] = useState<any>(null);
  const [showBooking, setShowBooking] = useState(false);

  const specializations = [
    'all', 'Emergency', 'Surgery', 'Dermatology', 'Cardiology', 'Oncology', 'Dental'
  ];

  const vets = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      specialization: "Emergency",
      rating: 4.9,
      distance: 2.3,
      isOnline: true,
      experience: "15 years",
      phone: "+91 98765 43210",
      location: "Central Delhi",
      availability: "24/7",
      image: "/api/placeholder/100/100",
      description: "Specialized in emergency animal care with 15 years of experience. Available 24/7 for critical cases.",
      services: ["Emergency Care", "Surgery", "Vaccination", "Consultation"],
      nextAvailable: "Available Now"
    },
    {
      id: 2,
      name: "Dr. Raj Mehta",
      specialization: "Surgery",
      rating: 4.8,
      distance: 5.1,
      isOnline: true,
      experience: "12 years",
      phone: "+91 98765 43211",
      location: "South Mumbai",
      availability: "Mon-Sat 9AM-6PM",
      image: "/api/placeholder/100/100",
      description: "Expert in surgical procedures for animals. Specializes in orthopedic and soft tissue surgeries.",
      services: ["Surgery", "Orthopedics", "Consultation", "Follow-up"],
      nextAvailable: "Tomorrow 10AM"
    },
    {
      id: 3,
      name: "Dr. Amit Patel",
      specialization: "Dermatology",
      rating: 4.7,
      distance: 8.7,
      isOnline: false,
      experience: "10 years",
      phone: "+91 98765 43212",
      location: "Bangalore Central",
      availability: "Tue-Sat 10AM-7PM",
      image: "/api/placeholder/100/100",
      description: "Dermatology specialist with expertise in skin conditions and allergies in animals.",
      services: ["Dermatology", "Allergy Treatment", "Skin Care", "Consultation"],
      nextAvailable: "Tuesday 2PM"
    }
  ];

  const filteredVets = vets.filter(vet => {
    const specializationMatch = selectedSpecialization === 'all' || vet.specialization === selectedSpecialization;
    const distanceMatch = vet.distance <= distanceFilter;
    const ratingMatch = vet.rating >= ratingFilter;
    return specializationMatch && distanceMatch && ratingMatch;
  });

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-8 paw-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-4">
              Vet <span className="text-[#D4AF37]">Network</span>
            </h1>
            <p className="text-lg text-white/80">
              Connect with qualified veterinarians in your area
            </p>
          </motion.div>

          {/* Online Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-8"
          >
            <div className="glass-card p-4 flex items-center space-x-4">
              <span className="text-white font-medium">Network Status:</span>
              <button
                onClick={() => setIsOnline(!isOnline)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isOnline 
                    ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                    : 'bg-red-500/20 text-red-300 border border-red-500/30'
                }`}
              >
                {isOnline ? (
                  <>
                    <Wifi className="h-4 w-4" />
                    <span>Online</span>
                  </>
                ) : (
                  <>
                    <WifiOff className="h-4 w-4" />
                    <span>Offline</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-6 mb-8"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Filter className="h-5 w-5 text-[#D4AF37]" />
              <h2 className="text-xl font-montserrat font-semibold text-white">Filters</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Specialization Filter */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Specialization
                </label>
                <select
                  value={selectedSpecialization}
                  onChange={(e) => setSelectedSpecialization(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#D4AF37]"
                >
                  {specializations.map((spec) => (
                    <option key={spec} value={spec} className="bg-[#2F3E46]">
                      {spec === 'all' ? 'All Specializations' : spec}
                    </option>
                  ))}
                </select>
              </div>

              {/* Distance Filter */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Distance (km)
                </label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={distanceFilter}
                  onChange={(e) => setDistanceFilter(Number(e.target.value))}
                  className="w-full"
                />
                <div className="text-sm text-white/60 mt-1">{distanceFilter} km</div>
              </div>

              {/* Rating Filter */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Minimum Rating
                </label>
                <div className="flex items-center space-x-2">
                  {[0, 3, 4, 4.5].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => setRatingFilter(rating)}
                      className={`px-3 py-1 rounded-lg text-sm transition-all duration-300 ${
                        ratingFilter === rating
                          ? 'bg-[#D4AF37] text-[#2F3E46]'
                          : 'bg-white/10 text-white/80 hover:bg-white/20'
                      }`}
                    >
                      {rating === 0 ? 'Any' : `${rating}+`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">
                  Search
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/60" />
                  <input
                    type="text"
                    placeholder="Search vets..."
                    className="w-full pl-10 pr-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vets Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredVets.map((vet, index) => (
              <motion.div
                key={vet.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={() => {
                  setSelectedVet(vet);
                  setShowBooking(true);
                }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center">
                      <Heart className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-montserrat font-semibold text-white">
                        {vet.name}
                      </h3>
                      <p className="text-sm text-[#00BFA6]">{vet.specialization}</p>
                    </div>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    vet.isOnline 
                      ? 'bg-green-500/20 text-green-300' 
                      : 'bg-red-500/20 text-red-300'
                  }`}>
                    {vet.isOnline ? 'Online' : 'Offline'}
                  </div>
                </div>

                {/* Rating and Distance */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 text-[#D4AF37] fill-current" />
                    <span className="text-white font-semibold">{vet.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-white/60">
                    <MapPin className="h-4 w-4" />
                    <span>{vet.distance} km</span>
                  </div>
                </div>

                {/* Info */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-white/80">
                    <Award className="h-4 w-4" />
                    <span>{vet.experience} experience</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-white/80">
                    <MapPin className="h-4 w-4" />
                    <span>{vet.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-white/80">
                    <Clock className="h-4 w-4" />
                    <span>{vet.availability}</span>
                  </div>
                </div>

                {/* Services */}
                <div className="mb-4">
                  <p className="text-sm text-white/60 mb-2">Services:</p>
                  <div className="flex flex-wrap gap-1">
                    {vet.services.slice(0, 3).map((service) => (
                      <span key={service} className="px-2 py-1 bg-[#4682B4]/20 text-[#4682B4] rounded-full text-xs">
                        {service}
                      </span>
                    ))}
                    {vet.services.length > 3 && (
                      <span className="px-2 py-1 bg-white/10 text-white/60 rounded-full text-xs">
                        +{vet.services.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                                  <button 
                  onClick={() => {
                    setSelectedVet(vet);
                    setShowBooking(true);
                  }}
                  className="flex-1 bg-[#00BFA6] hover:bg-[#00A693] text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                  Book Appointment
                </button>
                  <button className="p-2 bg-[#4682B4] hover:bg-[#708090] rounded-lg transition-colors">
                    <Phone className="h-4 w-4 text-white" />
                  </button>
                  <button className="p-2 bg-[#D4AF37] hover:bg-[#B8941F] rounded-lg transition-colors">
                    <MessageCircle className="h-4 w-4 text-white" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredVets.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <AlertCircle className="h-12 w-12 text-white/40 mx-auto mb-4" />
              <p className="text-white/60">No veterinarians found matching your criteria.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Booking Modal */}
      {showBooking && selectedVet && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowBooking(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-card p-8 max-w-md w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-montserrat font-bold text-white">
                Book Appointment
              </h3>
              <button
                onClick={() => setShowBooking(false)}
                className="text-white/60 hover:text-white"
              >
                ×
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white mb-2">{selectedVet.name}</h4>
                <p className="text-white/80 text-sm">{selectedVet.description}</p>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Time
                  </label>
                  <select className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#D4AF37]">
                    <option>10:00 AM</option>
                    <option>11:00 AM</option>
                    <option>12:00 PM</option>
                    <option>2:00 PM</option>
                    <option>3:00 PM</option>
                    <option>4:00 PM</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">
                    Reason for Visit
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe the issue..."
                    className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => setShowBooking(false)}
                  className="flex-1 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
                >
                  Cancel
                </button>
                <button className="flex-1 px-4 py-2 bg-[#D4AF37] text-[#2F3E46] rounded-lg hover:bg-[#B8941F] transition-colors font-semibold">
                  Book Appointment
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
} 