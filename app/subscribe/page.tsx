'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Check, 
  Star, 
  Heart, 
  Shield, 
  Zap, 
  Users, 
  Award,
  CreditCard,
  Lock,
  ArrowRight,
  Crown,
  Sparkles,
  Gift
} from 'lucide-react';

export default function Subscribe() {
  const [selectedPlan, setSelectedPlan] = useState('basic');
  const [paymentMethod, setPaymentMethod] = useState('razorpay');

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: '₹99',
      period: 'month',
      description: 'Perfect for individual volunteers',
      features: [
        'Emergency Response Priority',
        'Basic AI Assistance',
        'Community Access',
        'Email Support',
        'Mobile App Access'
      ],
      popular: false,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'boost',
      name: 'Boost',
      price: '₹149',
      period: 'quarter',
      description: 'Enhanced features for active volunteers',
      features: [
        'Everything in Basic',
        'Advanced AI Features',
        'Priority Support',
        'Analytics Dashboard',
        'Training Resources',
        'Reward Points x2'
      ],
      popular: true,
      color: 'from-[#D4AF37] to-[#B8941F]'
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '₹299',
      period: 'year',
      description: 'Complete access for organizations',
      features: [
        'Everything in Boost',
        '24/7 Emergency Hotline',
        'Custom AI Training',
        'Advanced Analytics',
        'API Access',
        'Dedicated Support',
        'White-label Options'
      ],
      popular: false,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const paymentMethods = [
    {
      id: 'razorpay',
      name: 'Razorpay',
      description: 'Secure payment gateway',
      icon: CreditCard
    },
    {
      id: 'stripe',
      name: 'Stripe',
      description: 'International payments',
      icon: Lock
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Save More Animals',
      description: 'Access to advanced tools and resources to help more animals in need'
    },
    {
      icon: Shield,
      title: 'Priority Support',
      description: 'Get faster response times and dedicated support for critical cases'
    },
    {
      icon: Zap,
      title: 'Advanced AI',
      description: 'Enhanced AI assistance with custom training and specialized knowledge'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Special badges, leaderboard positions, and community recognition'
    }
  ];

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
              Choose Your <span className="text-[#D4AF37]">Plan</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Unlock advanced features and help more animals with our premium subscription plans. 
              Every subscription directly supports our mission to protect and care for animals in need.
            </p>
          </motion.div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 text-center group hover:scale-105 transition-transform duration-300"
              >
                <benefit.icon className="h-12 w-12 text-[#D4AF37] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-montserrat font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-4">
              Subscription Plans
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Choose the plan that best fits your needs and help us create a better world for animals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative glass-card p-8 ${
                  plan.popular ? 'ring-2 ring-[#D4AF37]' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-[#D4AF37] text-[#2F3E46] px-4 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                      <Crown className="h-4 w-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-montserrat font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-white/80 mb-6">
                    {plan.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-4xl font-montserrat font-bold text-white">
                      {plan.price}
                    </span>
                    <span className="text-white/60">/{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-[#00BFA6] flex-shrink-0" />
                      <span className="text-white/90">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    selectedPlan === plan.id
                      ? 'bg-[#D4AF37] text-[#2F3E46]'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {selectedPlan === plan.id ? 'Selected' : 'Choose Plan'}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Section */}
      {selectedPlan && (
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
                  Complete Your Subscription
                </h2>
                <p className="text-white/80">
                  Secure payment powered by trusted payment gateways
                </p>
              </div>

              {/* Selected Plan Summary */}
              <div className="bg-white/5 rounded-lg p-6 mb-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-montserrat font-semibold text-white mb-2">
                      {plans.find(p => p.id === selectedPlan)?.name} Plan
                    </h3>
                    <p className="text-white/80">
                      {plans.find(p => p.id === selectedPlan)?.description}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-montserrat font-bold text-[#D4AF37]">
                      {plans.find(p => p.id === selectedPlan)?.price}
                    </div>
                    <div className="text-white/60">
                      per {plans.find(p => p.id === selectedPlan)?.period}
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-montserrat font-semibold text-white mb-4">
                  Choose Payment Method
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {paymentMethods.map((method) => (
                    <button
                      key={method.id}
                      onClick={() => setPaymentMethod(method.id)}
                      className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                        paymentMethod === method.id
                          ? 'border-[#D4AF37] bg-[#D4AF37]/10'
                          : 'border-white/20 bg-white/5 hover:border-white/40'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <method.icon className="h-6 w-6 text-[#D4AF37]" />
                        <div className="text-left">
                          <div className="font-semibold text-white">{method.name}</div>
                          <div className="text-sm text-white/60">{method.description}</div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Payment Form */}
              <div className="space-y-4 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/80 mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="mb-8">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 h-4 w-4 text-[#D4AF37] bg-white/10 border-white/20 rounded focus:ring-[#D4AF37]"
                  />
                  <label htmlFor="terms" className="text-sm text-white/80">
                    I agree to the{' '}
                    <a href="#" className="text-[#D4AF37] hover:underline">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-[#D4AF37] hover:underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>
              </div>

              {/* Subscribe Button */}
              <button className="w-full bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-[#2F3E46] font-semibold py-4 px-6 rounded-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
                <Sparkles className="h-5 w-5" />
                <span>Subscribe Now</span>
                <ArrowRight className="h-5 w-5" />
              </button>

              <div className="text-center mt-4">
                <p className="text-sm text-white/60">
                  🔒 Secure payment powered by {paymentMethod === 'razorpay' ? 'Razorpay' : 'Stripe'}
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-montserrat font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Can I cancel my subscription anytime?",
                answer: "Yes, you can cancel your subscription at any time. No questions asked."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, debit cards, and digital wallets through Razorpay and Stripe."
              },
              {
                question: "Is my payment information secure?",
                answer: "Absolutely. We use industry-standard encryption and never store your payment details on our servers."
              },
              {
                question: "Do you offer refunds?",
                answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with your subscription."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6"
              >
                <h3 className="text-lg font-montserrat font-semibold text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-white/80">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 