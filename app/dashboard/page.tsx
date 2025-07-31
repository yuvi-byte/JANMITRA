'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Clock, Star, Award, Heart, Eye, CheckCircle, 
  Calendar, Phone, User, Filter, Search, TrendingUp,
  AlertTriangle, Users, BarChart3, Target
} from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('cases');
  const [filterStatus, setFilterStatus] = useState('all');

  const userStats = {
    totalPoints: 2450,
    casesHandled: 23,
    rank: 5,
    nextRankPoints: 550
  };

  const activeCases = [
    {
      id: 'AN-001',
      type: 'Dog',
      condition: 'Injured',
      location: 'Bandra West, Mumbai',
      urgency: 'high',
      status: 'assigned',
      reportedAt: '2 hours ago',
      distance: '1.2 km',
      points: 150
    },
    {
      id: 'AN-002',
      type: 'Cat',
      condition: 'Abandoned',
      location: 'Juhu Beach, Mumbai',
      urgency: 'medium',
      status: 'in-progress',
      reportedAt: '4 hours ago',
      distance: '3.5 km',
      points: 100
    },
    {
      id: 'AN-003',
      type: 'Bird',
      condition: 'Trapped',
      location: 'Powai Lake, Mumbai',
      urgency: 'low',
      status: 'pending',
      reportedAt: '6 hours ago',
      distance: '8.2 km',
      points: 75
    }
  ];

  const leaderboard = [
    { rank: 1, name: 'Priya Sharma', points: 3420, badge: 'gold' },
    { rank: 2, name: 'Raj Mehta', points: 2890, badge: 'silver' },
    { rank: 3, name: 'Anjali Desai', points: 2650, badge: 'bronze' },
    { rank: 4, name: 'Vikram Singh', points: 2500, badge: null },
    { rank: 5, name: 'You', points: 2450, badge: null, isCurrentUser: true },
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'critical': return 'text-red-400 bg-red-400/20';
      case 'high': return 'text-orange-400 bg-orange-400/20';
      case 'medium': return 'text-yellow-400 bg-yellow-400/20';
      case 'low': return 'text-green-400 bg-green-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'assigned': return 'text-blue-400 bg-blue-400/20';
      case 'in-progress': return 'text-yellow-400 bg-yellow-400/20';
      case 'completed': return 'text-green-400 bg-green-400/20';
      case 'pending': return 'text-gray-400 bg-gray-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-8 paw-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-4">
              Volunteer Dashboard
            </h1>
            <p className="text-lg text-white/80">
              Welcome back! Track your impact and discover new rescue opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Cards */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-sm">Total Points</p>
                  <p className="text-2xl font-bold text-[#D4AF37]">{userStats.totalPoints}</p>
                </div>
                <Star className="h-8 w-8 text-[#D4AF37]" />
              </div>
              <div className="mt-4 bg-white/10 rounded-full h-2">
                <div 
                  className="bg-[#D4AF37] h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(userStats.totalPoints / (userStats.totalPoints + userStats.nextRankPoints)) * 100}%` }}
                ></div>
              </div>
              <p className="text-white/60 text-xs mt-2">{userStats.nextRankPoints} points to next rank</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-sm">Cases Handled</p>
                  <p className="text-2xl font-bold text-[#00BFA6]">{userStats.casesHandled}</p>
                </div>
                <CheckCircle className="h-8 w-8 text-[#00BFA6]" />
              </div>
              <p className="text-white/60 text-xs mt-4">+3 this week</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-sm">Current Rank</p>
                  <p className="text-2xl font-bold text-[#4682B4]">#{userStats.rank}</p>
                </div>
                <Award className="h-8 w-8 text-[#4682B4]" />
              </div>
              <p className="text-white/60 text-xs mt-4">Top 10% volunteer</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-sm">Impact Score</p>
                  <p className="text-2xl font-bold text-purple-400">95%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-purple-400" />
              </div>
              <p className="text-white/60 text-xs mt-4">Excellent performance</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Cases */}
            <div className="lg:col-span-2 space-y-6">
              {/* Tab Navigation */}
              <div className="glass-card p-6">
                <div className="flex flex-wrap gap-2 mb-6">
                  {[
                    { id: 'cases', label: 'Active Cases', icon: Heart },
                    { id: 'map', label: 'Map View', icon: MapPin },
                    { id: 'history', label: 'History', icon: Clock }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                        activeTab === tab.id
                          ? 'bg-[#D4AF37] text-[#2F3E46]'
                          : 'bg-white/10 text-white/80 hover:bg-white/20'
                      }`}
                    >
                      <tab.icon className="h-4 w-4" />
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>

                {/* Filters */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/40" />
                    <input
                      type="text"
                      placeholder="Search cases..."
                      className="w-full pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Filter className="h-4 w-4 text-white/60" />
                    <select
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value)}
                      className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-[#D4AF37]"
                    >
                      <option value="all" className="bg-[#2F3E46]">All Status</option>
                      <option value="assigned" className="bg-[#2F3E46]">Assigned</option>
                      <option value="in-progress" className="bg-[#2F3E46]">In Progress</option>
                      <option value="pending" className="bg-[#2F3E46]">Pending</option>
                    </select>
                  </div>
                </div>

                {/* Cases List */}
                <div className="space-y-4">
                  {activeCases.map((case_, index) => (
                    <motion.div
                      key={case_.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="glass-card p-4 hover:scale-105 transition-transform duration-300 cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-[#D4AF37]/20 rounded-full flex items-center justify-center">
                            <Heart className="h-6 w-6 text-[#D4AF37]" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-white">Case {case_.id}</h3>
                            <p className="text-white/60 text-sm">{case_.type} - {case_.condition}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getUrgencyColor(case_.urgency)}`}>
                            {case_.urgency}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center space-x-2 text-white/80">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{case_.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-white/80">
                          <Clock className="h-4 w-4" />
                          <span className="text-sm">{case_.reportedAt}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(case_.status)}`}>
                            {case_.status.replace('-', ' ')}
                          </span>
                          <span className="text-white/60 text-sm">{case_.distance} away</span>
                        </div>
                        <div className="flex items-center space-x-2 text-[#D4AF37]">
                          <Star className="h-4 w-4" />
                          <span className="font-medium">{case_.points} pts</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Leaderboard & Profile */}
            <div className="space-y-6">
              {/* Profile Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="glass-card p-6"
              >
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="h-10 w-10 text-[#2F3E46]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Volunteer Profile</h3>
                  <p className="text-white/60">Animal Rescuer</p>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Member Since</span>
                    <span className="text-white">Jan 2024</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Specialization</span>
                    <span className="text-white">Dogs & Cats</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80">Availability</span>
                    <span className="text-green-400">Online</span>
                  </div>
                </div>

                <button className="w-full btn-primary mt-6">
                  Edit Profile
                </button>
              </motion.div>

              {/* Leaderboard */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="glass-card p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center space-x-2">
                  <Award className="h-6 w-6 text-[#D4AF37]" />
                  <span>Leaderboard</span>
                </h3>

                <div className="space-y-3">
                  {leaderboard.map((person) => (
                    <div
                      key={person.rank}
                      className={`flex items-center space-x-3 p-3 rounded-lg ${
                        person.isCurrentUser 
                          ? 'bg-[#D4AF37]/20 border border-[#D4AF37]/50' 
                          : 'bg-white/5'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                        person.rank === 1 ? 'bg-yellow-500 text-black' :
                        person.rank === 2 ? 'bg-gray-400 text-black' :
                        person.rank === 3 ? 'bg-amber-600 text-black' :
                        'bg-white/20 text-white'
                      }`}>
                        {person.rank}
                      </div>
                      <div className="flex-1">
                        <div className={`font-medium ${person.isCurrentUser ? 'text-[#D4AF37]' : 'text-white'}`}>
                          {person.name}
                        </div>
                        <div className="text-white/60 text-sm">{person.points} points</div>
                      </div>
                      {person.badge && (
                        <Award className={`h-5 w-5 ${
                          person.badge === 'gold' ? 'text-yellow-500' :
                          person.badge === 'silver' ? 'text-gray-400' :
                          'text-amber-600'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="glass-card p-6"
              >
                <h3 className="text-xl font-semibold text-white mb-6">Quick Actions</h3>
                
                <div className="space-y-3">
                  <button className="w-full btn-primary flex items-center justify-center space-x-2">
                    <Heart className="h-4 w-4" />
                    <span>Accept New Case</span>
                  </button>
                  <button className="w-full btn-secondary flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span>Emergency Contact</span>
                  </button>
                  <button className="w-full btn-accent flex items-center justify-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>Find Team Members</span>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}