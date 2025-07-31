'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { AlertTriangle, Phone, MessageCircle, MapPin, X } from 'lucide-react';

const SOSButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCalling, setIsCalling] = useState(false);

  const emergencyContacts = [
    {
      name: 'Emergency Hotline',
      number: '+91 98765 43210',
      type: 'phone',
      description: '24/7 Animal Emergency Response'
    },
    {
      name: 'WhatsApp Emergency',
      number: '+91 98765 43211',
      type: 'whatsapp',
      description: 'Quick messaging for urgent cases'
    },
    {
      name: 'Nearest Vet',
      number: '+91 98765 43212',
      type: 'phone',
      description: 'Local veterinary assistance'
    }
  ];

  const handleEmergencyCall = (contact: any) => {
    setIsCalling(true);
    
    if (contact.type === 'whatsapp') {
      window.open(`https://wa.me/${contact.number.replace(/\D/g, '')}?text=EMERGENCY: Animal in distress needs immediate help`, '_blank');
    } else {
      window.open(`tel:${contact.number}`, '_self');
    }
    
    setTimeout(() => setIsCalling(false), 2000);
  };

  const handleLocationShare = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const locationUrl = `https://www.google.com/maps?q=${latitude},${longitude}`;
          window.open(locationUrl, '_blank');
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('Unable to get your location. Please share manually.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  return (
    <>
      {/* Emergency Panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ 
          opacity: isOpen ? 1 : 0, 
          scale: isOpen ? 1 : 0.8, 
          y: isOpen ? 0 : 20 
        }}
        transition={{ duration: 0.3 }}
        className={`fixed bottom-24 left-4 w-80 glass-card z-50 ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-6 w-6 text-red-400" />
              <span className="font-semibold text-white">Emergency Contacts</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="space-y-4 mb-6">
            {emergencyContacts.map((contact, index) => (
              <motion.div
                key={contact.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-white">{contact.name}</h3>
                    <p className="text-sm text-white/60">{contact.description}</p>
                    <p className="text-[#00BFA6] font-medium">{contact.number}</p>
                  </div>
                  <button
                    onClick={() => handleEmergencyCall(contact)}
                    disabled={isCalling}
                    className={`p-3 rounded-lg transition-colors ${
                      contact.type === 'whatsapp'
                        ? 'bg-green-500 hover:bg-green-600'
                        : 'bg-[#D4AF37] hover:bg-[#B8941F]'
                    } ${isCalling ? 'opacity-50' : ''}`}
                  >
                    {contact.type === 'whatsapp' ? (
                      <MessageCircle className="h-5 w-5 text-white" />
                    ) : (
                      <Phone className="h-5 w-5 text-white" />
                    )}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-3">
            <button
              onClick={handleLocationShare}
              className="w-full bg-[#4682B4] hover:bg-[#708090] text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
            >
              <MapPin className="h-5 w-5" />
              <span>Share My Location</span>
            </button>
            
            <div className="text-center">
              <p className="text-xs text-white/60">
                ⚠️ Use only for genuine emergencies
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* SOS Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 left-4 w-16 h-16 bg-red-500 hover:bg-red-600 rounded-full shadow-lg flex items-center justify-center z-50 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
      >
        <AlertTriangle className="h-8 w-8 text-white" />
      </motion.button>
    </>
  );
};

export default SOSButton; 