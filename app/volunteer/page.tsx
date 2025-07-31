'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Heart, 
  MapPin, 
  Clock, 
  Star, 
  Trophy, 
  Users, 
  Target, 
  Award,
  Phone,
  MessageCircle,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  Calendar,
  Activity
} from 'lucide-react';

export default function VolunteerDashboard() {
  const [activeTab, setActiveTab] = useState('cases');

  const activeCases = [
    {
      id: 1,
      title: "Injured Dog - Central Park",
      status: "In Progress",
      priority: "High",
      location: "Central Park, Delhi",
      time: "2 hours ago",
      description: "Dog with injured leg, needs immediate medical attention",
      volunteer: "Raj Mehta",
      phone: "+91 98765 43210"
    },
    {
      id: 2,
      title: "Abandoned Kittens - Mall Road",
      status: "New",
      priority: "Medium",
      location: "Mall Road, Mumbai",
      time: "4 hours ago",
      description: "Three kittens found abandoned, need rescue and care",
      volunteer: "Priya Sharma",
      phone: "+91 98765 43211"
    },
    {
      id: 3,
      title: "Sick Bird - Garden Area",
      status: "Completed",
      priority: "Low",
      location: "Botanical Garden, Bangalore",
      time: "1 day ago",
      description: "Bird with respiratory issues, treated and released",
      volunteer: "Amit Patel",
      phone: "+91 98765 43212"
    }
  ];

  const leaderboard = [
    { rank: 1, name: "Raj Mehta", points: 2850, cases: 45, badge: "Gold" },
    { rank: 2, name: "Priya Sharma", points: 2400, cases: 38, badge: "Silver" },
    { rank: 3, name: "Amit Patel", points: 2100, cases: 32, badge: "Bronze" },
    { rank: 4, name: "Neha Singh", points: 1850, cases: 28, badge: "Bronze" },
    { rank: 5, name: "Karan Verma", points: 1600, cases: 25, badge: "Bronze" }
  ];

  const volunteerOfMonth = {
    name: "Raj Mehta",
    image: "/api/placeholder/100/100",
    points: 2850,
    cases: 45,
    achievements: ["First Responder", "Night Owl", "Weekend Warrior"],
    description: "Dedicated volunteer who has rescued 45 animals this month alone. Always available for emergency calls and goes above and beyond to help animals in need."
  };

  const taskProgress = [
    { task: "Emergency Response", completed: 8, total: 10, percentage: 80 },
    { task: "Follow-up Visits", completed: 12, total: 15, percentage: 80 },
    { task: "Community Outreach", completed: 5, total: 8, percentage: 62.5 },
    { task: "Training Sessions", completed: 3, total: 4, percentage: 75 }
  ];

  const stats = [
    { icon: Heart, value: "45", label: "Cases Handled", color: "text-[#D4AF37]" },
    { icon: Target, value: "2850", label: "Points Earned", color: "text-[#00BFA6]" },
    { icon: Clock, value: "120", label: "Hours Volunteered", color: "text-[#4682B4]" },
    { icon: Star, value: "4.9", label: "Rating", color: "text-[#D4AF37]" }
  ];

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
              Volunteer <span className="text-[#D4AF37]">Dashboard</span>
            </h1>
            <p className="text-lg text-white/80">
              Track your impact and manage active cases
            </p>
          </motion.div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300"
              >
                <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform`} />
                <div className="text-2xl font-montserrat font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-white/80 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              { id: 'cases', label: 'Active Cases', icon: Heart },
              { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
              { id: 'volunteer', label: 'Volunteer of Month', icon: Award },
              { id: 'progress', label: 'Task Progress', icon: Activity }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[#D4AF37] text-[#2F3E46]'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                <tab.icon className="h-4 w-4" />
                <span>{tab.label}</span>
                {tab.id === 'cases' && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">3</span>
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="space-y-8">
            {/* Active Cases */}
            {activeTab === 'cases' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-montserrat font-bold text-white mb-6">
                  Active Cases
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {activeCases.map((case_, index) => (
                    <motion.div
                      key={case_.id}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="glass-card p-6"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-montserrat font-semibold text-white mb-2">
                            {case_.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-white/60">
                            <span className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{case_.location}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{case_.time}</span>
                            </span>
                          </div>
                        </div>
                        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          case_.status === 'New' ? 'bg-blue-500/20 text-blue-300' :
                          case_.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-300' :
                          'bg-green-500/20 text-green-300'
                        }`}>
                          {case_.status}
                        </div>
                      </div>
                      
                      <p className="text-white/80 mb-4">
                        {case_.description}
                      </p>
                      
                      <div className="flex justify-between items-center">
                        <div className="text-sm text-white/60">
                          Volunteer: {case_.volunteer}
                        </div>
                        <div className="flex space-x-2">
                          <button className="p-2 bg-[#00BFA6] hover:bg-[#00A693] rounded-lg transition-colors">
                            <Phone className="h-4 w-4 text-white" />
                          </button>
                          <button className="p-2 bg-[#4682B4] hover:bg-[#708090] rounded-lg transition-colors">
                            <MessageCircle className="h-4 w-4 text-white" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Leaderboard */}
            {activeTab === 'leaderboard' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-montserrat font-bold text-white mb-6">
                  Volunteer Leaderboard
                </h2>
                <div className="glass-card p-6">
                  <div className="space-y-4">
                    {leaderboard.map((volunteer, index) => (
                      <motion.div
                        key={volunteer.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            {index < 3 ? (
                              <Trophy className={`h-6 w-6 ${
                                index === 0 ? 'text-yellow-400' :
                                index === 1 ? 'text-gray-300' :
                                'text-amber-600'
                              }`} />
                            ) : (
                              <span className="text-white/60 font-semibold">#{volunteer.rank}</span>
                            )}
                            <span className="font-semibold text-white">{volunteer.name}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-6">
                          <div className="text-center">
                            <div className="text-lg font-bold text-[#D4AF37]">{volunteer.points}</div>
                            <div className="text-xs text-white/60">Points</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-[#00BFA6]">{volunteer.cases}</div>
                            <div className="text-xs text-white/60">Cases</div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm font-semibold text-white/80">{volunteer.badge}</div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Volunteer of the Month */}
            {activeTab === 'volunteer' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-montserrat font-bold text-white mb-6">
                  Volunteer of the Month
                </h2>
                <div className="glass-card p-8">
                  <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
                    <div className="text-center lg:text-left">
                      <div className="w-32 h-32 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center mb-4">
                        <Users className="h-16 w-16 text-white" />
                      </div>
                      <h3 className="text-2xl font-montserrat font-bold text-white mb-2">
                        {volunteerOfMonth.name}
                      </h3>
                      <div className="flex items-center justify-center lg:justify-start space-x-4 mb-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-[#D4AF37]">{volunteerOfMonth.points}</div>
                          <div className="text-sm text-white/60">Points</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-[#00BFA6]">{volunteerOfMonth.cases}</div>
                          <div className="text-sm text-white/60">Cases</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <p className="text-white/80 mb-6 leading-relaxed">
                        {volunteerOfMonth.description}
                      </p>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-white mb-3">Achievements:</h4>
                        <div className="flex flex-wrap gap-2">
                          {volunteerOfMonth.achievements.map((achievement) => (
                            <span key={achievement} className="px-3 py-1 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full text-sm">
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Task Progress */}
            {activeTab === 'progress' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-montserrat font-bold text-white mb-6">
                  Task Progress
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {taskProgress.map((task, index) => (
                    <motion.div
                      key={task.task}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="glass-card p-6"
                    >
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-montserrat font-semibold text-white">
                          {task.task}
                        </h3>
                        <span className="text-sm text-white/60">
                          {task.completed}/{task.total}
                        </span>
                      </div>
                      
                      <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                        <div 
                          className="bg-gradient-to-r from-[#D4AF37] to-[#00BFA6] h-2 rounded-full transition-all duration-500"
                          style={{ width: `${task.percentage}%` }}
                        ></div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-white/60">
                          {task.percentage}% Complete
                        </span>
                        {task.percentage >= 80 ? (
                          <CheckCircle className="h-5 w-5 text-green-400" />
                        ) : task.percentage >= 50 ? (
                          <TrendingUp className="h-5 w-5 text-yellow-400" />
                        ) : (
                          <AlertTriangle className="h-5 w-5 text-red-400" />
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
} 