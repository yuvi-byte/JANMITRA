'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  BarChart3, 
  Users, 
  FileText, 
  Activity, 
  Settings,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  Star,
  Award,
  Calendar,
  Filter,
  Search,
  Download,
  Eye,
  Edit,
  Trash2,
  Plus,
  Bell,
  Heart,
  Shield,
  Target,
  Zap
} from 'lucide-react';

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedReport, setSelectedReport] = useState<any>(null);
  const [showReportModal, setShowReportModal] = useState(false);
  const [selectedVolunteer, setSelectedVolunteer] = useState<any>(null);
  const [showVolunteerModal, setShowVolunteerModal] = useState(false);
  const [selectedVet, setSelectedVet] = useState<any>(null);
  const [showVetModal, setShowVetModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const performanceMetrics = [
    { 
      title: "Total Cases", 
      value: "1,247", 
      change: "+12%", 
      trend: "up",
      icon: FileText,
      color: "text-blue-400"
    },
    { 
      title: "Active Volunteers", 
      value: "342", 
      change: "+8%", 
      trend: "up",
      icon: Users,
      color: "text-green-400"
    },
    { 
      title: "Success Rate", 
      value: "94.2%", 
      change: "+2.1%", 
      trend: "up",
      icon: Target,
      color: "text-yellow-400"
    },
    { 
      title: "Response Time", 
      value: "8.5 min", 
      change: "-15%", 
      trend: "down",
      icon: Clock,
      color: "text-purple-400"
    }
  ];

  const recentReports = [
    {
      id: 1,
      title: "Injured Dog - Central Park",
      status: "In Progress",
      priority: "High",
      location: "Central Park, Delhi",
      time: "2 hours ago",
      volunteer: "Raj Mehta",
      description: "Dog with injured leg, needs immediate medical attention"
    },
    {
      id: 2,
      title: "Abandoned Kittens - Mall Road",
      status: "New",
      priority: "Medium",
      location: "Mall Road, Mumbai",
      time: "4 hours ago",
      volunteer: "Priya Sharma",
      description: "Three kittens found abandoned, need rescue and care"
    },
    {
      id: 3,
      title: "Sick Bird - Garden Area",
      status: "Completed",
      priority: "Low",
      location: "Botanical Garden, Bangalore",
      time: "1 day ago",
      volunteer: "Amit Patel",
      description: "Bird with respiratory issues, treated and released"
    }
  ];

  const volunteers = [
    {
      id: 1,
      name: "Raj Mehta",
      email: "raj.mehta@email.com",
      phone: "+91 98765 43210",
      status: "Active",
      cases: 45,
      rating: 4.9,
      joinDate: "2023-01-15",
      location: "Delhi"
    },
    {
      id: 2,
      name: "Priya Sharma",
      email: "priya.sharma@email.com",
      phone: "+91 98765 43211",
      status: "Active",
      cases: 38,
      rating: 4.8,
      joinDate: "2023-02-20",
      location: "Mumbai"
    },
    {
      id: 3,
      name: "Amit Patel",
      email: "amit.patel@email.com",
      phone: "+91 98765 43212",
      status: "Inactive",
      cases: 32,
      rating: 4.7,
      joinDate: "2023-03-10",
      location: "Bangalore"
    }
  ];

  const vets = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      specialization: "Emergency",
      email: "dr.priya@vetclinic.com",
      phone: "+91 98765 43210",
      status: "Online",
      rating: 4.9,
      experience: "15 years",
      location: "Central Delhi"
    },
    {
      id: 2,
      name: "Dr. Raj Mehta",
      specialization: "Surgery",
      email: "dr.raj@vetclinic.com",
      phone: "+91 98765 43211",
      status: "Online",
      rating: 4.8,
      experience: "12 years",
      location: "South Mumbai"
    },
    {
      id: 3,
      name: "Dr. Amit Patel",
      specialization: "Dermatology",
      email: "dr.amit@vetclinic.com",
      phone: "+91 98765 43212",
      status: "Offline",
      rating: 4.7,
      experience: "10 years",
      location: "Bangalore Central"
    }
  ];

  const activityLogs = [
    {
      id: 1,
      action: "Case Assigned",
      user: "Raj Mehta",
      target: "Injured Dog Case #1247",
      time: "2 hours ago",
      type: "assignment"
    },
    {
      id: 2,
      action: "Volunteer Registered",
      user: "Neha Singh",
      target: "New volunteer account created",
      time: "4 hours ago",
      type: "registration"
    },
    {
      id: 3,
      action: "Case Completed",
      user: "Amit Patel",
      target: "Sick Bird Case #1245",
      time: "1 day ago",
      type: "completion"
    },
    {
      id: 4,
      action: "Vet Added",
      user: "Admin",
      target: "Dr. Priya Sharma added to network",
      time: "2 days ago",
      type: "admin"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
      case 'Online':
      case 'Completed':
        return 'bg-green-500/20 text-green-300';
      case 'In Progress':
        return 'bg-yellow-500/20 text-yellow-300';
      case 'New':
        return 'bg-blue-500/20 text-blue-300';
      case 'Inactive':
      case 'Offline':
        return 'bg-red-500/20 text-red-300';
      default:
        return 'bg-gray-500/20 text-gray-300';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-500/20 text-red-300';
      case 'Medium':
        return 'bg-yellow-500/20 text-yellow-300';
      case 'Low':
        return 'bg-green-500/20 text-green-300';
      default:
        return 'bg-gray-500/20 text-gray-300';
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
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-montserrat font-bold text-white mb-4">
              Admin <span className="text-[#D4AF37]">Panel</span>
            </h1>
            <p className="text-lg text-white/80">
              Monitor and manage the JanMitra platform
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
              { id: 'reports', label: 'Reports', icon: FileText },
              { id: 'volunteers', label: 'Volunteers', icon: Users },
              { id: 'vets', label: 'Vets', icon: Heart },
              { id: 'activity', label: 'Activity Logs', icon: Activity }
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
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="space-y-8">
            {/* Dashboard Tab */}
            {activeTab === 'dashboard' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Performance Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {performanceMetrics.map((metric, index) => (
                    <motion.div
                      key={metric.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="glass-card p-6"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <metric.icon className={`h-8 w-8 ${metric.color}`} />
                        <div className={`flex items-center space-x-1 text-sm ${
                          metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {metric.trend === 'up' ? (
                            <TrendingUp className="h-4 w-4" />
                          ) : (
                            <TrendingDown className="h-4 w-4" />
                          )}
                          <span>{metric.change}</span>
                        </div>
                      </div>
                      <div className="text-2xl font-montserrat font-bold text-white mb-1">
                        {metric.value}
                      </div>
                      <div className="text-white/80 text-sm">
                        {metric.title}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Recent Reports */}
                <div className="glass-card p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-montserrat font-semibold text-white">
                      Recent Reports
                    </h2>
                    <button className="btn-primary flex items-center space-x-2">
                      <Eye className="h-4 w-4" />
                      <span>View All</span>
                    </button>
                  </div>
                  <div className="space-y-4">
                    {recentReports.map((report, index) => (
                      <motion.div
                        key={report.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-semibold text-white">{report.title}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(report.status)}`}>
                              {report.status}
                            </span>
                            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getPriorityColor(report.priority)}`}>
                              {report.priority}
                            </span>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-white/60">
                            <span className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{report.location}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{report.time}</span>
                            </span>
                            <span>Volunteer: {report.volunteer}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button 
                            onClick={() => {
                              setSelectedReport(report);
                              setShowReportModal(true);
                            }}
                            className="p-2 bg-[#00BFA6] hover:bg-[#00A693] rounded-lg transition-colors"
                          >
                            <Eye className="h-4 w-4 text-white" />
                          </button>
                          <button className="p-2 bg-[#4682B4] hover:bg-[#708090] rounded-lg transition-colors">
                            <Edit className="h-4 w-4 text-white" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Reports Tab */}
            {activeTab === 'reports' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-montserrat font-bold text-white">
                    All Reports
                  </h2>
                  <div className="flex space-x-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/60" />
                      <input
                        type="text"
                        placeholder="Search reports..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#D4AF37]"
                      />
                    </div>
                    <button className="btn-secondary flex items-center space-x-2">
                      <Filter className="h-4 w-4" />
                      <span>Filter</span>
                    </button>
                    <button className="btn-accent flex items-center space-x-2">
                      <Download className="h-4 w-4" />
                      <span>Export</span>
                    </button>
                  </div>
                </div>

                <div className="glass-card p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/20">
                          <th className="text-left py-3 px-4 text-white font-semibold">Case ID</th>
                          <th className="text-left py-3 px-4 text-white font-semibold">Title</th>
                          <th className="text-left py-3 px-4 text-white font-semibold">Status</th>
                          <th className="text-left py-3 px-4 text-white font-semibold">Priority</th>
                          <th className="text-left py-3 px-4 text-white font-semibold">Volunteer</th>
                          <th className="text-left py-3 px-4 text-white font-semibold">Location</th>
                          <th className="text-left py-3 px-4 text-white font-semibold">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {recentReports.map((report, index) => (
                          <motion.tr
                            key={report.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="border-b border-white/10 hover:bg-white/5"
                          >
                            <td className="py-3 px-4 text-white/80">#{report.id}</td>
                            <td className="py-3 px-4 text-white font-medium">{report.title}</td>
                            <td className="py-3 px-4">
                              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(report.status)}`}>
                                {report.status}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getPriorityColor(report.priority)}`}>
                                {report.priority}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-white/80">{report.volunteer}</td>
                            <td className="py-3 px-4 text-white/80">{report.location}</td>
                            <td className="py-3 px-4">
                              <div className="flex space-x-2">
                                <button className="p-1 bg-[#00BFA6] hover:bg-[#00A693] rounded transition-colors">
                                  <Eye className="h-3 w-3 text-white" />
                                </button>
                                <button className="p-1 bg-[#4682B4] hover:bg-[#708090] rounded transition-colors">
                                  <Edit className="h-3 w-3 text-white" />
                                </button>
                                <button className="p-1 bg-red-500 hover:bg-red-600 rounded transition-colors">
                                  <Trash2 className="h-3 w-3 text-white" />
                                </button>
                              </div>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Volunteers Tab */}
            {activeTab === 'volunteers' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-montserrat font-bold text-white">
                    Volunteer Management
                  </h2>
                  <button className="btn-primary flex items-center space-x-2">
                    <Plus className="h-4 w-4" />
                    <span>Add Volunteer</span>
                  </button>
                </div>

                <div className="glass-card p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/20">
                          <th className="text-left py-3 px-4 text-white font-semibold">Name</th>
                          <th className="text-left py-3 px-4 text-white font-semibold">Contact</th>
                          <th className="text-left py-3 px-4 text-white font-semibold">Status</th>
                          <th className="text-left py-3 px-4 text-white font-semibold">Cases</th>
                          <th className="text-left py-3 px-4 text-white font-semibold">Rating</th>
                          <th className="text-left py-3 px-4 text-white font-semibold">Location</th>
                          <th className="text-left py-3 px-4 text-white font-semibold">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {volunteers.map((volunteer, index) => (
                          <motion.tr
                            key={volunteer.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="border-b border-white/10 hover:bg-white/5"
                          >
                            <td className="py-3 px-4">
                              <div>
                                <div className="text-white font-medium">{volunteer.name}</div>
                                <div className="text-white/60 text-sm">{volunteer.email}</div>
                              </div>
                            </td>
                            <td className="py-3 px-4 text-white/80">{volunteer.phone}</td>
                            <td className="py-3 px-4">
                              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(volunteer.status)}`}>
                                {volunteer.status}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-white/80">{volunteer.cases}</td>
                            <td className="py-3 px-4">
                              <div className="flex items-center space-x-1">
                                <Star className="h-4 w-4 text-[#D4AF37] fill-current" />
                                <span className="text-white">{volunteer.rating}</span>
                              </div>
                            </td>
                            <td className="py-3 px-4 text-white/80">{volunteer.location}</td>
                            <td className="py-3 px-4">
                              <div className="flex space-x-2">
                                <button 
                                  onClick={() => {
                                    setSelectedVolunteer(volunteer);
                                    setShowVolunteerModal(true);
                                  }}
                                  className="p-1 bg-[#00BFA6] hover:bg-[#00A693] rounded transition-colors"
                                >
                                  <Eye className="h-3 w-3 text-white" />
                                </button>
                                <button className="p-1 bg-[#4682B4] hover:bg-[#708090] rounded transition-colors">
                                  <Edit className="h-3 w-3 text-white" />
                                </button>
                                <button className="p-1 bg-[#D4AF37] hover:bg-[#B8941F] rounded transition-colors">
                                  <MessageCircle className="h-3 w-3 text-white" />
                                </button>
                              </div>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Vets Tab */}
            {activeTab === 'vets' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-montserrat font-bold text-white">
                    Vet Network Management
                  </h2>
                  <button className="btn-primary flex items-center space-x-2">
                    <Plus className="h-4 w-4" />
                    <span>Add Vet</span>
                  </button>
                </div>

                <div className="glass-card p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/20">
                          <th className="text-left py-3 px-4 text-white font-semibold">Name</th>
                          <th className="text-left py-3 px-4 text-white font-semibold">Specialization</th>
                          <th className="text-left py-3 px-4 text-white font-semibold">Contact</th>
                          <th className="text-left py-3 px-4 text-white font-semibold">Status</th>
                          <th className="text-left py-3 px-4 text-white font-semibold">Rating</th>
                          <th className="text-left py-3 px-4 text-white font-semibold">Experience</th>
                          <th className="text-left py-3 px-4 text-white font-semibold">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {vets.map((vet, index) => (
                          <motion.tr
                            key={vet.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="border-b border-white/10 hover:bg-white/5"
                          >
                            <td className="py-3 px-4">
                              <div>
                                <div className="text-white font-medium">{vet.name}</div>
                                <div className="text-white/60 text-sm">{vet.location}</div>
                              </div>
                            </td>
                            <td className="py-3 px-4 text-white/80">{vet.specialization}</td>
                            <td className="py-3 px-4">
                              <div>
                                <div className="text-white/80 text-sm">{vet.email}</div>
                                <div className="text-white/80 text-sm">{vet.phone}</div>
                              </div>
                            </td>
                            <td className="py-3 px-4">
                              <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(vet.status)}`}>
                                {vet.status}
                              </span>
                            </td>
                            <td className="py-3 px-4">
                              <div className="flex items-center space-x-1">
                                <Star className="h-4 w-4 text-[#D4AF37] fill-current" />
                                <span className="text-white">{vet.rating}</span>
                              </div>
                            </td>
                            <td className="py-3 px-4 text-white/80">{vet.experience}</td>
                            <td className="py-3 px-4">
                              <div className="flex space-x-2">
                                <button 
                                  onClick={() => {
                                    setSelectedVet(vet);
                                    setShowVetModal(true);
                                  }}
                                  className="p-1 bg-[#00BFA6] hover:bg-[#00A693] rounded transition-colors"
                                >
                                  <Eye className="h-3 w-3 text-white" />
                                </button>
                                <button className="p-1 bg-[#4682B4] hover:bg-[#708090] rounded transition-colors">
                                  <Edit className="h-3 w-3 text-white" />
                                </button>
                                <button className="p-1 bg-[#D4AF37] hover:bg-[#B8941F] rounded transition-colors">
                                  <MessageCircle className="h-3 w-3 text-white" />
                                </button>
                              </div>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Activity Logs Tab */}
            {activeTab === 'activity' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-montserrat font-bold text-white">
                    Activity Logs
                  </h2>
                  <div className="flex space-x-2">
                    <button className="btn-secondary flex items-center space-x-2">
                      <Filter className="h-4 w-4" />
                      <span>Filter</span>
                    </button>
                    <button className="btn-accent flex items-center space-x-2">
                      <Download className="h-4 w-4" />
                      <span>Export Logs</span>
                    </button>
                  </div>
                </div>

                <div className="glass-card p-6">
                  <div className="space-y-4">
                    {activityLogs.map((log, index) => (
                      <motion.div
                        key={log.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            log.type === 'assignment' ? 'bg-blue-500/20' :
                            log.type === 'registration' ? 'bg-green-500/20' :
                            log.type === 'completion' ? 'bg-yellow-500/20' :
                            'bg-purple-500/20'
                          }`}>
                            {log.type === 'assignment' ? (
                              <Target className="h-5 w-5 text-blue-400" />
                            ) : log.type === 'registration' ? (
                              <Users className="h-5 w-5 text-green-400" />
                            ) : log.type === 'completion' ? (
                              <CheckCircle className="h-5 w-5 text-yellow-400" />
                            ) : (
                              <Settings className="h-5 w-5 text-purple-400" />
                            )}
                          </div>
                          <div>
                            <div className="text-white font-medium">{log.action}</div>
                            <div className="text-white/60 text-sm">
                              {log.user} • {log.target}
                            </div>
                          </div>
                        </div>
                        <div className="text-white/60 text-sm flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{log.time}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Report Details Modal */}
      {showReportModal && selectedReport && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowReportModal(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-card p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-montserrat font-bold text-white">
                Report Details
              </h3>
              <button
                onClick={() => setShowReportModal(false)}
                className="text-white/60 hover:text-white"
              >
                ×
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">{selectedReport.title}</h4>
                <p className="text-white/80">{selectedReport.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Status</label>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(selectedReport.status)}`}>
                    {selectedReport.status}
                  </span>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Priority</label>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getPriorityColor(selectedReport.priority)}`}>
                    {selectedReport.priority}
                  </span>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Location</label>
                  <p className="text-white">{selectedReport.location}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Volunteer</label>
                  <p className="text-white">{selectedReport.volunteer}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Time</label>
                  <p className="text-white">{selectedReport.time}</p>
                </div>
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => setShowReportModal(false)}
                  className="flex-1 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
                >
                  Close
                </button>
                <button className="flex-1 px-4 py-2 bg-[#D4AF37] text-[#2F3E46] rounded-lg hover:bg-[#B8941F] transition-colors font-semibold">
                  Update Status
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Volunteer Details Modal */}
      {showVolunteerModal && selectedVolunteer && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowVolunteerModal(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-card p-8 max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-montserrat font-bold text-white">
                Volunteer Details
              </h3>
              <button
                onClick={() => setShowVolunteerModal(false)}
                className="text-white/60 hover:text-white"
              >
                ×
              </button>
            </div>

            <div className="space-y-6">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-12 w-12 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white">{selectedVolunteer.name}</h4>
                <p className="text-[#00BFA6]">{selectedVolunteer.email}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Phone</label>
                  <p className="text-white">{selectedVolunteer.phone}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Status</label>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(selectedVolunteer.status)}`}>
                    {selectedVolunteer.status}
                  </span>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Cases Handled</label>
                  <p className="text-white">{selectedVolunteer.cases}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Rating</label>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-[#D4AF37] fill-current" />
                    <span className="text-white">{selectedVolunteer.rating}</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Location</label>
                  <p className="text-white">{selectedVolunteer.location}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Join Date</label>
                  <p className="text-white">{selectedVolunteer.joinDate}</p>
                </div>
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => setShowVolunteerModal(false)}
                  className="flex-1 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
                >
                  Close
                </button>
                <button className="flex-1 px-4 py-2 bg-[#D4AF37] text-[#2F3E46] rounded-lg hover:bg-[#B8941F] transition-colors font-semibold">
                  Edit Volunteer
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Vet Details Modal */}
      {showVetModal && selectedVet && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowVetModal(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-card p-8 max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-montserrat font-bold text-white">
                Vet Details
              </h3>
              <button
                onClick={() => setShowVetModal(false)}
                className="text-white/60 hover:text-white"
              >
                ×
              </button>
            </div>

            <div className="space-y-6">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-[#D4AF37] to-[#B8941F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-12 w-12 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white">{selectedVet.name}</h4>
                <p className="text-[#00BFA6]">{selectedVet.specialization}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Email</label>
                  <p className="text-white">{selectedVet.email}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Phone</label>
                  <p className="text-white">{selectedVet.phone}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Status</label>
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(selectedVet.status)}`}>
                    {selectedVet.status}
                  </span>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Rating</label>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-[#D4AF37] fill-current" />
                    <span className="text-white">{selectedVet.rating}</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Experience</label>
                  <p className="text-white">{selectedVet.experience}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Location</label>
                  <p className="text-white">{selectedVet.location}</p>
                </div>
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => setShowVetModal(false)}
                  className="flex-1 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
                >
                  Close
                </button>
                <button className="flex-1 px-4 py-2 bg-[#D4AF37] text-[#2F3E46] rounded-lg hover:bg-[#B8941F] transition-colors font-semibold">
                  Edit Vet
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
} 