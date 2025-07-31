# JanMitra - AI-Powered Animal Rescue Platform

JanMitra is a comprehensive AI-assisted platform that connects communities with veterinarians and rescue teams for immediate animal care and protection. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

### Core Functionality
- **Emergency Animal Reporting** - Report animal emergencies with GPS location and instant alerts
- **AI-Powered Chatbot "Janu"** - Intelligent assistant for animal care guidance
- **Volunteer Dashboard** - Track cases, points, leaderboard, and task progress
- **Vet Network** - Connect with qualified veterinarians with live status and booking
- **Admin Panel** - Comprehensive management system for reports, volunteers, and analytics
- **Subscription Plans** - Premium features with Razorpay/Stripe integration
- **SOS Emergency Button** - Quick access to emergency contacts and location sharing

### Technical Features
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- **Real-time Updates** - Live status tracking and notifications
- **Modern UI/UX** - Smooth animations and glass-morphism design
- **TypeScript** - Full type safety and better development experience
- **Framer Motion** - Beautiful animations and transitions
- **Tailwind CSS** - Utility-first CSS framework for rapid development

## 🛠️ Tech Stack

- **Framework**: Next.js 13.5.1
- **Language**: TypeScript 5.2.2
- **Styling**: Tailwind CSS 3.3.3
- **Animations**: Framer Motion 12.23.12
- **Icons**: Lucide React 0.446.0
- **UI Components**: Radix UI
- **Forms**: React Hook Form 7.61.1
- **Validation**: Zod 3.25.76
- **Notifications**: React Hot Toast 2.5.2

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd project-bolt-sb1-s2sf2kzu/project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
project/
├── app/                    # Next.js 13 App Router
│   ├── about/             # About page
│   ├── admin/             # Admin panel
│   ├── contact/           # Contact page
│   ├── login/             # Login page
│   ├── report/            # Animal reporting
│   ├── subscribe/         # Subscription plans
│   ├── vet/               # Vet network
│   ├── volunteer/         # Volunteer dashboard
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # UI components (Radix)
│   ├── FloatingChatbot.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── SOSButton.tsx
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── public/               # Static assets
```

## 🎨 Design System

### Color Palette
- **Primary**: `#D4AF37` (Gold)
- **Secondary**: `#00BFA6` (Teal)
- **Accent**: `#4682B4` (Steel Blue)
- **Background**: `#2F3E46` (Dark Blue-Gray)
- **Text**: `#F5F5F5` (Light Gray)

### Typography
- **Headings**: Montserrat (Bold, Semi-bold)
- **Body**: Inter (Regular, Medium)

### Components
- **Glass Cards**: Semi-transparent backgrounds with backdrop blur
- **Gradient Buttons**: Smooth color transitions
- **Animated Elements**: Framer Motion powered animations
- **Responsive Grid**: Tailwind CSS grid system

## 📱 Pages & Features

### Home Page (`/`)
- Hero section with animated elements
- Statistics showcase
- Feature highlights
- Call-to-action sections

### About Page (`/about`)
- Mission and vision statements
- Team information
- Timeline of achievements
- Testimonials

### Volunteer Dashboard (`/volunteer`)
- Active cases management
- Points and leaderboard system
- Volunteer of the month
- Task progress tracking

### Vet Network (`/vet`)
- Live online/offline status
- Filter by specialization, distance, rating
- Appointment booking system
- Vet profiles and reviews

### Admin Panel (`/admin`)
- Dashboard with performance metrics
- Report management
- Volunteer management
- Vet network management
- Activity logs

### Subscription Plans (`/subscribe`)
- Three-tier pricing (Basic, Boost, Premium)
- Payment integration (Razorpay/Stripe)
- Feature comparison
- FAQ section

### Contact Page (`/contact`)
- Contact form
- Team information
- Social media links
- Feedback system

### Report Animal (`/report`)
- Emergency reporting form
- GPS location integration
- Photo upload capability
- Priority classification

## 🤖 AI Features

### Janu Chatbot
- **Floating Interface**: Always accessible chat widget
- **Smart Responses**: Context-aware animal care guidance
- **Emergency Handling**: Quick connection to rescue teams
- **Voice Support**: Text and voice interaction capabilities

### AI Integration
- **LangChain**: Framework for AI application development
- **GPT Integration**: Advanced language model for responses
- **Image Classification**: Future feature for injury detection
- **Voice Assistant**: Planned voice interaction capabilities

## 🚨 Emergency Features

### SOS Button
- **Floating Emergency Button**: Always visible red SOS button
- **Quick Contacts**: Direct access to emergency numbers
- **Location Sharing**: Automatic GPS location sharing
- **WhatsApp Integration**: Direct messaging to emergency contacts

### Emergency Response
- **24/7 Hotline**: Round-the-clock emergency support
- **Priority Routing**: Critical cases get immediate attention
- **Real-time Alerts**: Instant notifications to rescue teams
- **GPS Tracking**: Precise location tracking for emergencies

## 💳 Payment Integration

### Subscription Plans
- **Basic Plan**: ₹99/month - Essential features
- **Boost Plan**: ₹149/quarter - Enhanced features
- **Premium Plan**: ₹299/year - Complete access

### Payment Gateways
- **Razorpay**: Primary payment gateway for India
- **Stripe**: International payment processing
- **Secure Processing**: PCI DSS compliant
- **Multiple Methods**: Cards, UPI, digital wallets

## 🔧 Development

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Environment Variables
Create a `.env.local` file:
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=your-api-url
RAZORPAY_KEY_ID=your-razorpay-key
STRIPE_PUBLISHABLE_KEY=your-stripe-key
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### Other Platforms
- **Railway**: Backend deployment
- **Render**: Alternative hosting
- **Netlify**: Static site hosting

## 📊 Analytics & Monitoring

### Planned Integrations
- **Sentry**: Error tracking and monitoring
- **PostHog**: Product analytics
- **Google Analytics**: Website traffic analysis
- **Custom Dashboard**: Real-time platform metrics

## 🧪 Testing

### Testing Strategy
- **Cypress**: End-to-end testing
- **Jest**: Unit and integration testing
- **React Testing Library**: Component testing
- **Playwright**: Cross-browser testing

## 🔮 Future Roadmap

### Phase 2 Features
- **Mobile App**: Flutter-based Android/iOS app
- **AI Voice Assistant**: Advanced voice interaction
- **QR Code Scanner**: Lost pet identification
- **RFID Integration**: Smart pet cards
- **Advanced Analytics**: Machine learning insights

### Phase 3 Features
- **IoT Integration**: Smart collars and sensors
- **Blockchain**: Transparent donation tracking
- **AR/VR**: Virtual pet care training
- **Drone Integration**: Aerial rescue operations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Animal Welfare Organizations**: For inspiration and guidance
- **Open Source Community**: For amazing tools and libraries
- **Design Community**: For beautiful UI/UX inspiration
- **AI Community**: For advancing technology for good

## 📞 Support

- **Email**: hello@janmitra.org
- **Emergency**: +91 98765 43210
- **WhatsApp**: +91 98765 43211
- **Website**: [https://janmitra.org](https://janmitra.org)

---

**Made with ❤️ for animals everywhere** #   J A N M I T R A  
 